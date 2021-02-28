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
export const getBfwNotification = /* GraphQL */ `
  query GetBfwNotification($owner: String!, $createdAt: AWSDateTime!) {
    getBFWNotification(owner: $owner, createdAt: $createdAt) {
      to
      subject
      body
      createdAt
      owner
      email
      read
      updatedAt
    }
  }
`;
export const listBfwNotifications = /* GraphQL */ `
  query ListBfwNotifications(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelBFWNotificationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBFWNotifications(
      owner: $owner
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        to
        subject
        body
        createdAt
        owner
        email
        read
        updatedAt
      }
      nextToken
    }
  }
`;
