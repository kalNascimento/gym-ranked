import {
  RegisterView,
  LogoView,
  FormView,
  AnchorView,
  LogoText,
  AnchorText,
  NormalText,
} from './styles';

import background from '../../../assets/images/background-image.png';
import { OutlineButton } from '../../components/OutlineButton';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/Theme';
import { TextField } from '../../components/TextField';
import { Controller, useForm } from 'react-hook-form';

export const Register = () => {
  const { control, getValues, handleSubmit, watch } = useForm({
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const isSamePassword = (value: string) => {
    return watch('password') === value;
  };

  const onSubmit = () => {
    //TODO: implementar lógica de tratamento dos dados coletados
    getValues();
  };

  return (
    <ThemeProvider theme={theme.dark}>
      <RegisterView source={background}>
        <LogoView>
          <LogoText>cadastrar</LogoText>
        </LogoView>
        <FormView>
          <Controller
            name={'email'}
            control={control}
            rules={{
              required: 'E-mail deve ser preenchido',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Digite um formato de e-mail válido',
              },
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                id="email"
                label="E-mail"
                placeholder="exemplo@exemplo.com.br"
                errorMessage={error?.message}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            name={'password'}
            control={control}
            rules={{
              required: 'Senha deve ser preenchido',
              minLength: {
                value: 8,
                message: 'Senha deve ter no mínimo 8 caracteres',
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).+/,
                message: 'Senha deve conter letras e números',
              },
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                label="Senha"
                isPassword
                errorMessage={error?.message}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            name={'confirmPassword'}
            control={control}
            rules={{
              required: 'Confirmar senha deve ser preenchido',
              validate: {
                check: (value) =>
                  isSamePassword(value) || 'Senha e confirmar senha devem ser iguais',
              },
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                label="Confirmar senha"
                isPassword
                errorMessage={error?.message}
                value={value}
                onChangeText={onChange}
                textContentType="password"
              />
            )}
          />
          <OutlineButton onPress={handleSubmit(onSubmit)}>cadastrar</OutlineButton>
        </FormView>
        <AnchorView>
          <NormalText>
            Já possui uma conta? <AnchorText>faça login</AnchorText>
          </NormalText>
        </AnchorView>
      </RegisterView>
    </ThemeProvider>
  );
};
