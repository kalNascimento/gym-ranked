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

export const Register = () => {
  return (
    <ThemeProvider theme={theme.dark}>
      <RegisterView source={background}>
        <LogoView>
          <LogoText>cadastrar</LogoText>
        </LogoView>
        <FormView>
          <TextField
            label="E-mail"
            placeholder="exemplo@exemplo.com.br"
            errorMessage="Cadastro não pode estar vazio"
          />
          <TextField
            label="Senha"
            isPassword
            placeholder="exemplo@exemplo.com.br"
            errorMessage="Cadastro não pode estar vazio"
          />
          <TextField
            label="Confirmar senha"
            isPassword
            placeholder="exemplo@exemplo.com.br"
            errorMessage="Cadastro não pode estar vazio"
          />
          <OutlineButton>cadastrar</OutlineButton>
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
