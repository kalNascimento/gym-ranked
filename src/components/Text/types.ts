import { TextProps } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  fontColor?: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  textAlign?: string;
}

export enum FontSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export enum FontWeight {
  BOLD = 'bold',
  REGULAR = 'regular',
}

export interface VariantsMapProps {
  theme: DefaultTheme;
}
