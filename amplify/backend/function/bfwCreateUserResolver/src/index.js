/* Amplify Params - DO NOT EDIT
	API_BFW_GRAPHQLAPIENDPOINTOUTPUT
	API_BFW_GRAPHQLAPIIDOUTPUT
	API_BFW_GRAPHQLAPIKEYOUTPUT
	AUTH_BFWFC5BCFCD_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');

const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    const { input } = event.arguments;
    const { User } = await createCognitoUser({
        email: input.email,
        password: input.password
    });
    const user = { ...input, id: User.Username };
    delete user.password;

    return createAppUser(user);
};

function createCognitoUser({ email, password }) {
    const params = {
        UserPoolId: process.env.AUTH_BFWFC5BCFCD_USERPOOLID,
        Username: email,
        TemporaryPassword: password,
        UserAttributes: [{ Name: 'email', Value: email }]
    };

    return new Promise((resolve, reject) => {
        cognito.adminCreateUser(params, (err, data) => {
            if (err) reject(err.stack);
            else resolve(data);
        });
    }); 
}

const createUserQL = /* GraphQL */ gql`
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
        id
        email
        firstName
        lastName
        memberNumber
        payPalId
        cashAppId
        applePayId
        googlePayId
        avatar
        createdAt
        updatedAt
    }
  }
`;

async function createAppUser(input) {
    const graphqlData = await axios({
        url: process.env.API_BFW_GRAPHQLAPIENDPOINTOUTPUT,
        method: 'post',
        headers: {
          'x-api-key': process.env.API_BFW_GRAPHQLAPIKEYOUTPUT
        },
        data: {
          query: graphql.print(createUserQL),
          variables: { input }
        }
    });
    console.log(graphqlData.data.data.createUser);
    return graphqlData.data.data.createUser;
}
