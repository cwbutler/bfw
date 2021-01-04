/* Amplify Params - DO NOT EDIT
	AUTH_BFWFC5BCFCD_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');

const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    const { input: { email } } = event.arguments;

    const user = await getUser( );
    console.log(user);

    return true;
};


function subscribe(Username) {
    const params = {
        UserAttributes: [{
            Name: 'custom:subscribed',
            Value: '1'
        }],
        UserPoolId: process.env.AUTH_BFWFC5BCFCD_USERPOOLID,
        Username
    };
    console.log(Username)

    return new Promise((resolve, reject) => {
        cognito.adminUpdateUserAttributes(params, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}
