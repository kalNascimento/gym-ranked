import { TextFieldProps } from './types';
import { ContainerInputView, TextInput } from './styles';
import { Text } from '../Text';
import { FontSize, FontWeight } from '../Text/types';

export const TextField = ({ label, errorMessage, isPassword, ...props }: TextFieldProps) => {
  return (
    <ContainerInputView>
      <Text fontSize={FontSize.LG} fontWeight={FontWeight.BOLD}>
        {label}
      </Text>
      <TextInput {...props} placeholder={isPassword ? '********' : props.placeholder} />
    </ContainerInputView>
  );
};
