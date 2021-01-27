import { TextInput } from 'react-native';
import EmailInput from './Email';
import PasswordInput from './Password';

export default function getInputClass(name) {
  switch (name) {
    case 'email':
      return EmailInput;
    case 'password':
      return PasswordInput;
    default:
      return TextInput;
  }
}