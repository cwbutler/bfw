import { API, Auth } from 'aws-amplify';
import * as mutations from "../../graphql/mutations";

export async function signUp(input) {
  const email = input.email.toLowerCase();
  const { user } = await Auth.signUp({
    username: email,
    password: input.password,
    attributes: {
      email,
      name: `${input.firstName} ${input.lastName}`,
      given_name: input.firstName,
      family_name: input.lastName,
      profile: input.profile
    }
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
  const data = await Auth.confirmSignUp(email.toLowerCase(), code);
  return data;
}

export async function updateUserAttributes({ user, attributes }) {
  const data = await Auth.updateUserAttributes(user, attributes);
  return data;
}
