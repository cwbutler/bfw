/* Amplify Params - DO NOT EDIT
	API_BFW_GRAPHQLAPIENDPOINTOUTPUT
	API_BFW_GRAPHQLAPIIDOUTPUT
	API_BFW_GRAPHQLAPIKEYOUTPUT
	AUTH_BFWFC5BCFCD_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const { request } = require('/opt/appSyncRequest');
const { listUsers } = require('/opt/graphql/queries');

exports.handler = async (event) => {
    try {
        const users = await listBFWUsers();
        return true;
    } catch (err) {
        console.log('error notifying users: ', err);
    } 
};

async function listBFWUsers(users=[], nextToken=undefined) {
    try {
        const graphqlData = await request({
          query: listUsers,
          operationName: 'ListUsers',
          variables: {
            limit: 10000,
            nextToken
          }
        }, process.env.API_BFW_GRAPHQLAPIENDPOINTOUTPUT);

        if (graphqlData.data.listUsers.items?.length > 0) {
          users.concat(graphqlData.data.listUsers.items);
        }

        if (Boolean(graphqlData.data.listUsers.nextToken)) {
          await listBFWUsers(users, graphqlData.data.listUsers.nextToken);
        }

        return users;
    } catch (err) {
        console.log('error retrieving users: ', err);
    } 
}
