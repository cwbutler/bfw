const AWS = require('aws-sdk');
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

async function listCognitoUsers(users=[], PaginationToken=undefined) {
    const params = {
      UserPoolId: process.env.AUTH_BFWFC5BCFCD_USERPOOLID,
      AttributesToGet: ['email', 'sub'],
      Limit: 60,
      PaginationToken
    };
    
    const result = await fetchUsers(params);
    users = users.concat(result.Users);
    if (result.PaginationToken) users = await listCognitoUsers(users, result.PaginationToken);
    return users;
}
exports.listCognitoUsers = listCognitoUsers;

function fetchUsers(params) {
  return new Promise((resolve, reject) => {
    cognitoidentityserviceprovider.listUsers(params, function(err, data) {
      if (err) reject(err); // an error occurred
      else resolve(data);
    });
  });
}
