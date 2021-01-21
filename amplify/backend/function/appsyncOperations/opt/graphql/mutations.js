"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.createUser = exports.deleteUser = exports.batchUpdateUsers = exports.subscribeUser = exports.createAppUser = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const createAppUser =
/* GraphQL */
`
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
exports.createAppUser = createAppUser;
const subscribeUser =
/* GraphQL */
`
  mutation SubscribeUser($input: SubscribeUserInput) {
    subscribeUser(input: $input)
  }
`;
exports.subscribeUser = subscribeUser;
const batchUpdateUsers =
/* GraphQL */
`
  mutation BatchUpdateUsers($input: [UpdateUserInput]) {
    batchUpdateUsers(input: $input) {
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
exports.batchUpdateUsers = batchUpdateUsers;
const deleteUser =
/* GraphQL */
`
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
exports.deleteUser = deleteUser;
const createUser =
/* GraphQL */
`
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
exports.createUser = createUser;
const updateUser =
/* GraphQL */
`
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
exports.updateUser = updateUser;