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
const api = require('./api');

exports.handler = async (event) => {
    try {
      const users = await api.listCognitoUsers();
      return users.length;
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

    if (graphqlData.data.listUsers.items.length > 0) {
      users = users.concat(graphqlData.data.listUsers.items);
    }
    
    if (Boolean(graphqlData.data.listUsers.nextToken)) {
      users = await listBFWUsers(users, graphqlData.data.listUsers.nextToken);
    }

    return users;
  } catch (err) {
    console.log('error retrieving users: ', err);
  } 
}

function chunk(array=[], size=1000) {
  let i,j,temparray=[];
  for (i=0,j=array.length; i<j; i+=size) {
      temparray.push(array.slice(i,i+size));
  }
  return temparray;
}
