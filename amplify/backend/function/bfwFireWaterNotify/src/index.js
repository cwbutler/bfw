/* Amplify Params - DO NOT EDIT
	API_BFW_GRAPHQLAPIENDPOINTOUTPUT
	API_BFW_GRAPHQLAPIIDOUTPUT
	API_BFW_GRAPHQLAPIKEYOUTPUT
	AUTH_BFWFC5BCFCD_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const api = require('./api');
const { chunk, find, uniqBy, sortBy } = require("lodash");
const axios = require("axios");
const { request } = require('/opt/appSyncRequest')
const { batchUpdateNotifications } = require('/opt/graphql/mutations')

exports.handler = async (event) => {
	return sendNotifications(event);
};

function uniqUsers(users) {
	return uniqBy(users, e => e.toLowerCase());
}

async function status(event) {
	const notFound = [];
	const noNotificationToken = [];
	const users = [];

	await asyncForEach(uniqUsers(event.users), async (u, index) => {
		try {
			const user = await api.getCognitoUser(u.toLowerCase());
			const token = find(user.UserAttributes, { Name: 'custom:notificationToken' });
			users.push(u);
			if (!token) noNotificationToken.push(`#${index + 1} - ${u}`);
		}
		catch (e) {
			if (e.code === 'UserNotFoundException') {
				notFound.push(`#${index + 1} - ${u}`);
			} else {
				console.log(e)	
			}
		}
	});
	
	return {
		notFound,
		noNotificationToken,
		numberOfActiveMembers: users.length,
	};
}

async function updateMemberNumbers(input) {
	await clearMemberNumbers();
	return await addMemberNumbers(input);
}

async function getMembersCSV() {
	const members = await api.listCognitoUsers();
	const csvHeader = 'Member #,Email,Name\n';
	const csvArr = [];

	members.forEach(m => {
		const memNum = find(m.Attributes, { Name: 'preferred_username' }) || ({ Value: 'TBD' });
		const email = find(m.Attributes, { Name: 'email' });
		const name = find(m.Attributes, { Name: 'name' });
		csvArr.push([memNum.Value, email.Value, name.Value]);
	});

	return csvHeader + sortBy(csvArr, (a) => a[0])
		.reduce((str, arr) => str += arr.join(',') + '\n', '');
}

async function clearMemberNumbers() {
	const members = await api.listCognitoUsers({ AttributesToGet: ['email'] });
	await asyncForEach(members, async (m) => {
		await api.updateUserAttributes(m.Attributes[0].Value, [{ Name: 'preferred_username', Value: 'TBD' }]);
	});
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function addMemberNumbers(input) {
	const usersNotFound = [];
	const users = [];
	await asyncForEach(uniqUsers(input.users), async (email, index) => {
		if (index + 1 === 57) { console.log(email) }
		try {
			await api.updateUserAttributes(email, [{ Name: 'preferred_username', Value: String(index + 1).padStart(4, '0') }]);
			users.push(email);
		} catch (e) {
			if (e.errorType === 'UserNotFoundException' || e.code === 'UserNotFoundException') {
				usersNotFound.push(email);
			} else {
				console.log(e)	
			}
		}
	});

  return {
  	usersNotFound,
  	numOfActiveUsers: users.length
  };
}

async function sendNotification(data) {
  await axios({
  	url: 'https://exp.host/--/api/v2/push/send',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    data,
  });
}

function createMessage({ to, title, body, data }) {
	return {
    to,
    sound: 'default',
    title,
    body,
    data,
  };
}

async function sendNotifications(input) {
	const uniqueUsers = uniqUsers(input.users);
	const users = chunk(uniqueUsers, 8);
	const notfound = [];
	const notifications = [];
	const noNotificationToken = [];
	const dbData = [];
	let gifter, gifterName, gifterNum = '';
	
	await asyncForEach(users, async (group, groupIndex) => {
		await asyncForEach(group, async (email, userIndex) => {
			try {
				const user = await api.getCognitoUser(email.toLowerCase());
				const notificationToken = find(user.UserAttributes, { Name: 'custom:notificationToken' });
				const name = find(user.UserAttributes, { Name: 'name' });
				const num = find(user.UserAttributes, { Name: 'preferred_username' });
				const owner = find(user.UserAttributes, { Name: 'sub' });
				let to, title, body;

				if (!notificationToken) {
					noNotificationToken.push(email);
				}
				
				to = (notificationToken) ? notificationToken.Value : 'N/A';
	
				if (groupIndex === 0) {
					title = 'Time To Receive!';
					body = `Hi ${name.Value} Community #${num.Value}
IT'S TIME TO BE WATERED 💦
You will receive Gifts from 8 people.`;
					notifications.push(createMessage({ to, title, body }));
					to !== 'N/A' && dbData.push({ to, subject: title, body, owner: owner.Value, email });
				} else if (groupIndex > 0 && groupIndex < 9) {
					gifter = await api.getCognitoUser(users[0][groupIndex - 1]);
					gifterName = find(gifter.UserAttributes, { Name: 'name' });
					gifterNum = find(gifter.UserAttributes, { Name: 'preferred_username' });
					title = 'Its Time To Fire!';
					body = `Hi ${name.Value} Community #${num.Value}
IT'S YOUR TIME TO GIFT UP 🔥
Please IMMEDIATELY send your Gift to ${gifterName.Value} Member #${gifterNum.Value}
You MUST send your Gift Up confirmation screenshot to admin via app messenger!`;

					notifications.push(createMessage({ to, title, body }));
					to !== 'N/A' && dbData.push({ to, subject: title, body, owner: owner.Value, email });
				} else if (groupIndex > 8 && groupIndex < 40) {
					gifter = await api.getCognitoUser(uniqueUsers[groupIndex - 1]);
					gifterName = find(gifter.UserAttributes, { Name: 'name' });
					gifterNum = find(gifter.UserAttributes, { Name: 'preferred_username' });
					title = 'Its Time To Fire!';
					body = `Hi ${name.Value} Member #${num.Value}
IT'S YOUR TIME TO GIFT IN 🔥
Please IMMEDIATELY send your Gift to ${gifterName.Value} Member #${gifterNum.Value}
You MUST send your Gift In confirmation screenshot to admin via app messenger!`;

					notifications.push(createMessage({ to, title, body }));
					to !== 'N/A' && dbData.push({ to, subject: title, body, owner: owner.Value, email });
				}
			} catch (e) {
				if (e.errorType === 'UserNotFoundException' || e.code === 'UserNotFoundException') {
					notfound.push(email);
				} else {
					console.log(email, e);	
				}
			}
		});
	});
	
	try {
		// await Promise.all(chunk(notifications, 100).map(async notify => await sendNotification(notify)));
		await request({
      query: batchUpdateNotifications,
      variables: { input: dbData },
    }, process.env.API_BFW_GRAPHQLAPIENDPOINTOUTPUT);
	} catch (e) {
		console.log(e);
	}
	
	return {
		notifications,
		dbData,
		notfound,
		noNotificationToken,
	};
}
