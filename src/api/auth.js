import { API, Auth, Storage } from 'aws-amplify';
import * as mutations from "../../graphql/mutations";

export async function signUp(input) {
  const email = input.email.toLowerCase().trim();
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
  input.email && input.email.trim();
  const { data } = await API.graphql({
      query: mutations.createUser,
      variables: { input },
      authMode: "AWS_IAM"
    });
    return data.createUser;
}

export async function confirmUser({ email, code }) {
  const data = await Auth.confirmSignUp(email.toLowerCase().trim(), code);
  return data;
}

export async function updateUserAttributes({ user, attributes }) {
  const data = await Auth.updateUserAttributes(user, attributes);
  return data;
}

export async function saveProfileImage({ user, image }) {
  console.log(image)
  //await Storage.put(`user/avatar/${user.attributes.sub}`, image);
  //const data = await Auth.updateUserAttributes(user, attributes);
  return;
}
