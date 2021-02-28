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
export const createBfwNotification = /* GraphQL */ `
  mutation CreateBfwNotification(
    $input: CreateBFWNotificationInput!
    $condition: ModelBFWNotificationConditionInput
  ) {
    createBFWNotification(input: $input, condition: $condition) {
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
export const updateBfwNotification = /* GraphQL */ `
  mutation UpdateBfwNotification(
    $input: UpdateBFWNotificationInput!
    $condition: ModelBFWNotificationConditionInput
  ) {
    updateBFWNotification(input: $input, condition: $condition) {
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
export const deleteBfwNotification = /* GraphQL */ `
  mutation DeleteBfwNotification(
    $input: DeleteBFWNotificationInput!
    $condition: ModelBFWNotificationConditionInput
  ) {
    deleteBFWNotification(input: $input, condition: $condition) {
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
