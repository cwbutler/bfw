"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listUsers = exports.getUser = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const getUser =
/* GraphQL */
`
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
exports.getUser = getUser;
const listUsers =
/* GraphQL */
`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
exports.listUsers = listUsers;