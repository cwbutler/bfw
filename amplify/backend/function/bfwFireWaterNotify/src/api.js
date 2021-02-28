const AWS = require('aws-sdk');
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

async function listCognitoUsers({ users=[], PaginationToken=undefined, AttributesToGet=['email', 'sub'] }) {
    const params = {
      UserPoolId: process.env.AUTH_BFWFC5BCFCD_USERPOOLID,
      AttributesToGet,
      Limit: 60,
      PaginationToken
    };
    
    const result = await fetchUsers(params);
    users = users.concat(result.Users);
    if (result.PaginationToken) users = await listCognitoUsers({ users, PaginationToken: result.PaginationToken });
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

async function getCognitoUser(email='') {
    const params = {
      UserPoolId: process.env.AUTH_BFWFC5BCFCD_USERPOOLID,
      Username: email.toLowerCase()
    };
    return new Promise((resolve, reject) => {
      cognitoidentityserviceprovider.adminGetUser(params, function(err, data) {
      if (err) reject(err); // an error occurred
      else resolve(data);
    });
  });
}
exports.getCognitoUser = getCognitoUser;

async function updateUserAttributes(Username, UserAttributes=[]) {
    const params = {
      UserPoolId: process.env.AUTH_BFWFC5BCFCD_USERPOOLID,
      Username: Username.toLowerCase().trim(),
      UserAttributes
    };
    return new Promise((resolve, reject) => {
      cognitoidentityserviceprovider.adminUpdateUserAttributes(params, function(err, data) {
      if (err) reject(err); // an error occurred
      else resolve(data);
    });
  });
}
exports.updateUserAttributes = updateUserAttributes;
