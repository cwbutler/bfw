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
export const getNotifications = /* GraphQL */ `
  query GetNotifications($id: ID!, $owner: String!, $createdAt: AWSDateTime!) {
    getNotifications(id: $id, owner: $owner, createdAt: $createdAt) {
      id
      to
      subject
      body
      createdAt
      owner
      email
      updatedAt
    }
  }
`;
export const listNotificationss = /* GraphQL */ `
  query ListNotificationss(
    $id: ID
    $ownerCreatedAt: ModelNotificationsPrimaryCompositeKeyConditionInput
    $filter: ModelNotificationsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNotificationss(
      id: $id
      ownerCreatedAt: $ownerCreatedAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        to
        subject
        body
        createdAt
        owner
        email
        updatedAt
      }
      nextToken
    }
  }
`;
