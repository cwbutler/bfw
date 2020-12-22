import { API, Auth } from 'aws-amplify';
import * as mutations from "../../graphql/mutations";

export async function signUp({ email, password }) {
  const { user } = await Auth.signUp({
    username: email,
    password,
    attributes: { email }
  });
  return user;
}

export async function createUser(input) {
  const { data } = await API.graphql({
      query: mutations.createUser,
      variables: { input },
      authMode: "AWS_IAM"
    });
    return data.createUser;
}

export async function confirmUser({ email, code }) {
  const data = await Auth.confirmSignUp(email, code);
  return data;
}

export async function updateUserAttributes({ user, attributes }) {
  const data = await Auth.updateUserAttributes(user, attributes);
  return data;
}
