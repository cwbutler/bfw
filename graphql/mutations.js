/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAppUser = /* GraphQL */ `
  mutation CreateAppUser($input: UserInput) {
    createAppUser(input: $input) {
      id
      email
      firstName
      lastName
      memberNumber
      active
      subscriptionId
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
export const subscribeUser = /* GraphQL */ `
  mutation SubscribeUser($input: SubscribeUserInput) {
    subscribeUser(input: $input)
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      memberNumber
      active
      subscriptionId
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      memberNumber
      active
      subscriptionId
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
export const createUser = /* GraphQL */ `
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
      active
      subscriptionId
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
