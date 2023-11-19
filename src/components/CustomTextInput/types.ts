import { Control } from 'react-hook-form';

export interface CustomTextProps {
  label: string;
  control: Control<any>;
  name: string;
  rules: Omit<any, any>;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
}
