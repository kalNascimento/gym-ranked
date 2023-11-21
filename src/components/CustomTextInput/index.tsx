import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ErrorText, LabelText, TextInput } from './styles';
import { CustomTextProps } from './types';

export const CustomTextInput = ({
  label,
  control,
  rules,
  name,
  placeholder,
  type = 'text',
}: CustomTextProps) => {
  const theme = useTheme();

  return (
    <View testID="custom-text-input">
      <LabelText>{label}</LabelText>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={theme.colors.font.placeholder}
              value={value}
              onChangeText={onChange}
              secureTextEntry={type === 'password'}
              keyboardType={type === 'email' ? 'email-address' : undefined}
            />
            {error?.message && <ErrorText>{error.message}</ErrorText>}
          </>
        )}
      />
    </View>
  );
};
