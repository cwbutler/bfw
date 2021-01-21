"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDeleteUser = exports.onUpdateUser = exports.onCreateUser = void 0;

/* eslint-disable */
// this is an auto generated file. This will be overwritten
const onCreateUser =
/* GraphQL */
`
  subscription OnCreateUser {
    onCreateUser {
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
exports.onCreateUser = onCreateUser;
const onUpdateUser =
/* GraphQL */
`
  subscription OnUpdateUser {
    onUpdateUser {
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
exports.onUpdateUser = onUpdateUser;
const onDeleteUser =
/* GraphQL */
`
  subscription OnDeleteUser {
    onDeleteUser {
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
exports.onDeleteUser = onDeleteUser;