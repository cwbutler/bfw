/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAppUser = /* GraphQL */ `
  mutation CreateAppUser($input: UserInput) {
    createAppUser(input: $input) {
      id
      preferred_username
      email
      email_verified
      family_name
      given_name
      name
      enabled
      subscribed
      subscriptionId
      payPalId
      cashAppId
      applePayId
      googlePayId
      payPalMoneyPool
      picture
      status
    }
  }
`;
export const subscribeUser = /* GraphQL */ `
  mutation SubscribeUser($input: SubscribeUserInput) {
    subscribeUser(input: $input)
  }
`;
export const batchUpdateUsers = /* GraphQL */ `
  mutation BatchUpdateUsers($input: [UpdateUserInput]) {
    batchUpdateUsers(input: $input) {
      id
      preferred_username
      email
      email_verified
      family_name
      given_name
      name
      enabled
      subscribed
      subscriptionId
      payPalId
      cashAppId
      applePayId
      googlePayId
      payPalMoneyPool
      picture
      status
    }
  }
`;
