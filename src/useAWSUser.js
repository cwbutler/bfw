import React from 'react';
import { useState, useEffect, createContext } from 'react';
import { Auth, Hub } from 'aws-amplify';

export const AWSUserContext = createContext();

export default function AWSUserProvider(props) {
  const user = useAWSUser();
  return (
    <AWSUserContext.Provider value={user}>
      {props.children}
    </AWSUserContext.Provider>
  );
}

export function useAWSUser() {
  const [user, setUser] = useState({});
  user.setUser = setUser;
  user.refresh = async () => setUser(await Auth.currentAuthenticatedUser({ bypassCache: true }));

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((result) => {
        result.Session = result.signInUserSession;
        setUser(result);
      })
      .catch(e => console.log(e));
    
    const listener = async (data) => {
      switch (data.payload.event) {
        case 'signIn':
          console.info('user signed in', data);
          setUser(await Auth.currentAuthenticatedUser({ bypassCache: true }));
          break;
        case 'signOut':
          console.info('user signed out', data);
          setUser({});
          break;
      }
    };
    
    Hub.listen('auth', listener);
  }, []);

  return user;
}