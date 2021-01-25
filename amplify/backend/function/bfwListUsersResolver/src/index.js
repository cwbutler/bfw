/* Amplify Params - DO NOT EDIT
	AUTH_BFWFC5BCFCD_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
const UserPoolId = process.env.AUTH_BFWFC5BCFCD_USERPOOLID;

exports.handler = async (event) => {
    const { limit, nextToken } = event.arguments;
    const result = await fetchCognitoUsers({ Limit: limit, PaginationToken: nextToken });
    const items = result.Users.map(u => {
      const user = { id: u.Username };
      u.Attributes.forEach(a => user[a.Name] = a.Value);
      user.createdAt = u.UserCreateDate;
      user.modifiedAt = u.UserLastModifiedDate;
      user.enabled = u.Enabled;
      user.status = u.UserStatus;

      return user;
    });

    return { items, nextToken: result.PaginationToken };
};

function fetchCognitoUsers({ Limit, PaginationToken }) {
    const params = { UserPoolId, Limit, PaginationToken };
    return new Promise((resolve, reject) => {
      cognitoidentityserviceprovider.listUsers(params, function(err, data) {
        if (err) reject(err); // an error occurred
        else resolve(data);
      });
    });
}