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
      zelleId
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
export const batchUpdateNotifications = /* GraphQL */ `
  mutation BatchUpdateNotifications($input: [NotificationsInput]) {
    batchUpdateNotifications(input: $input) {
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
      zelleId
      picture
      status
    }
  }
`;
export const createNotifications = /* GraphQL */ `
  mutation CreateNotifications(
    $input: CreateNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    createNotifications(input: $input, condition: $condition) {
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
export const updateNotifications = /* GraphQL */ `
  mutation UpdateNotifications(
    $input: UpdateNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    updateNotifications(input: $input, condition: $condition) {
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
export const deleteNotifications = /* GraphQL */ `
  mutation DeleteNotifications(
    $input: DeleteNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    deleteNotifications(input: $input, condition: $condition) {
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
