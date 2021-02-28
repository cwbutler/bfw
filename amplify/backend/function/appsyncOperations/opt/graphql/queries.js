Object.defineProperty(exports,"__esModule",{value:true});exports.listBfwNotifications=exports.getBfwNotification=exports.listNotificationss=exports.getNotifications=exports.listAppUsers=void 0;var listAppUsers="\n  query ListAppUsers($filter: String, $limit: Int, $nextToken: String) {\n    listAppUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        preferred_username\n        email\n        email_verified\n        family_name\n        given_name\n        name\n        enabled\n        subscribed\n        subscriptionId\n        payPalId\n        cashAppId\n        applePayId\n        googlePayId\n        payPalMoneyPool\n        zelleId\n        picture\n        status\n      }\n      nextToken\n    }\n  }\n";exports.listAppUsers=listAppUsers;var getNotifications="\n  query GetNotifications($id: ID!, $owner: String!, $createdAt: AWSDateTime!) {\n    getNotifications(id: $id, owner: $owner, createdAt: $createdAt) {\n      id\n      to\n      subject\n      body\n      createdAt\n      owner\n      email\n      updatedAt\n    }\n  }\n";exports.getNotifications=getNotifications;var listNotificationss="\n  query ListNotificationss(\n    $id: ID\n    $ownerCreatedAt: ModelNotificationsPrimaryCompositeKeyConditionInput\n    $filter: ModelNotificationsFilterInput\n    $limit: Int\n    $nextToken: String\n    $sortDirection: ModelSortDirection\n  ) {\n    listNotificationss(\n      id: $id\n      ownerCreatedAt: $ownerCreatedAt\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n      sortDirection: $sortDirection\n    ) {\n      items {\n        id\n        to\n        subject\n        body\n        createdAt\n        owner\n        email\n        updatedAt\n      }\n      nextToken\n    }\n  }\n";exports.listNotificationss=listNotificationss;var getBfwNotification="\n  query GetBfwNotification($owner: String!, $createdAt: AWSDateTime!) {\n    getBFWNotification(owner: $owner, createdAt: $createdAt) {\n      to\n      subject\n      body\n      createdAt\n      owner\n      email\n      read\n      updatedAt\n    }\n  }\n";exports.getBfwNotification=getBfwNotification;var listBfwNotifications="\n  query ListBfwNotifications(\n    $owner: String\n    $createdAt: ModelStringKeyConditionInput\n    $filter: ModelBFWNotificationFilterInput\n    $limit: Int\n    $nextToken: String\n    $sortDirection: ModelSortDirection\n  ) {\n    listBFWNotifications(\n      owner: $owner\n      createdAt: $createdAt\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n      sortDirection: $sortDirection\n    ) {\n      items {\n        to\n        subject\n        body\n        createdAt\n        owner\n        email\n        read\n        updatedAt\n      }\n      nextToken\n    }\n  }\n";exports.listBfwNotifications=listBfwNotifications;