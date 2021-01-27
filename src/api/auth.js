import { API, Auth, Storage } from 'aws-amplify';
import * as mutations from "../../graphql/mutations";

export async function signUp(input) {
  const email = input.email.toLowerCase().trim();
  const given_name = input.firstName?.trim();
  const family_name = input.lastName?.trim();
  const { user } = await Auth.signUp({
    username: email,
    password: input.password,
    attributes: {
      email,
      name: (given_name || firstName) ? `${given_name} ${family_name}`.trim() : undefined,
      given_name,
      family_name,
      profile: input.profile,
      'custom:applePayId': input.applePayId?.trim(),
      'custom:cashAppId': input.cashAppId?.trim(),
      'custom:googlePayId': input.googlePayId?.trim(),
      'custom:payPalId': input.payPalId?.trim()
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
  const response = await fetch(image);
  const blob = await response.blob();
  const { key: picture } = await Storage.put(`user/avatar/${user.attributes.sub}`, blob);

  await updateUserAttributes({ user, attributes: { picture } });
  user.refresh();
  return;
}
