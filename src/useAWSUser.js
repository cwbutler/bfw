import { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';

export default function useAWSUser() {
  const [user, setUser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result) => {
        result.Session = result.signInUserSession;
        setUser(result);
      })
      .catch(e => console.log(e));
    
    const listener = async (data) => {
      switch (data.payload.event) {
        case 'signIn':
          console.info('user signed in', data);
          setUser(await Auth.currentAuthenticatedUser());
          break;
        case 'signOut':
          console.info('user signed out', data);
          setUser(undefined);
          break;
      }
    };
    
    Hub.listen('auth', listener);

    return () => Hub.remove('auth', listener);
  }, []);

  return user;
}