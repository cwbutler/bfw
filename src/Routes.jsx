import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import Providers from './Providers';
import AuthStack from './AuthNavigationStack';

export default function Routes() {
  const [user, setUser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result) => console.log(result))
      .catch(e => console.log(e));
  }, []);

  return (
    <Providers>
      {(user) ? null : <AuthStack />}
    </Providers>
  );
}
