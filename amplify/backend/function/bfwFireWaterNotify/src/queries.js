const gql = require('graphql-tag');

exports.listUsers = /* GraphQL */ gql`
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