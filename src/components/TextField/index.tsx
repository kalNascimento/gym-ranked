import { TextFieldProps } from './types';
import { ContainerInputView, TextInput } from './styles';
import { Text } from '../Text';
import { FontSize, FontWeight } from '../Text/types';
import { useTheme } from 'styled-components/native';

export const TextField = ({ label, errorMessage, isPassword, ...props }: TextFieldProps) => {
  const theme = useTheme();
  const passwordPlaceholder = '******';

  return (
    <ContainerInputView>
      <Text fontSize={FontSize.SM} fontWeight={FontWeight.BOLD} fontColor={theme.colors.white}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={isPassword}
        placeholder={isPassword ? passwordPlaceholder : props.placeholder}
        {...props}
      />
      <Text fontSize={FontSize.XS} fontColor={theme.colors.Feedback.danger}>
        {errorMessage}
      </Text>
    </ContainerInputView>
  );
};
