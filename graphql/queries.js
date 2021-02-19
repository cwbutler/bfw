/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAppUsers = /* GraphQL */ `
  query ListAppUsers($filter: String, $limit: Int, $nextToken: String) {
    listAppUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        zelleId
        picture
        status
      }
      nextToken
    }
  }
`;
