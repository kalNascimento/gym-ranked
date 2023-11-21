import { useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import background from '../../../assets/images/background-image.png';
import { confirmPasswordRules, emailRules, passwordRules } from '../../common/utils/form.utils';
import { CustomTextInput } from '../../components/CustomTextInput';
import { OutlineButton } from '../../components/OutlineButton';
import { theme } from '../../theme/Theme';
import {
  AnchorText,
  AnchorView,
  FormView,
  LogoText,
  LogoView,
  NormalText,
  RegisterView,
} from './styles';

export const Register = () => {
  const { control, getValues, handleSubmit, watch } = useForm({
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const isSamePassword = () => {
    return watch('password') === watch('confirmPassword');
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
          <CustomTextInput
            label={'E-mail'}
            control={control}
            placeholder="exemplo@exemplo.com.br"
            name={'email'}
            type="email"
            rules={emailRules}
          />
          <CustomTextInput
            label={'Senha'}
            control={control}
            placeholder="******"
            name={'password'}
            type="password"
            rules={passwordRules}
          />
          <CustomTextInput
            label="Confirmar senha"
            control={control}
            placeholder="******"
            type="password"
            name="confirmPassword"
            rules={{
              ...confirmPasswordRules,
              validate: {
                check: () => isSamePassword() || 'Senha e confirmar senha devem ser iguais',
              },
            }}
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
