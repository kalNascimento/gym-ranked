import { TextInputProps } from 'react-native';

export interface TextFieldProps extends TextInputProps {
  label: string;
  errorMessage: string;
  isPassword?: boolean;
}
