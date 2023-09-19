import { 
  RegisterView, 
  LogoView, 
  FormView, 
  AnchorView, 
  LogoText, 
  AnchorText, 
  NormalText
} from "./styles"

const image = require('../../../assets/images/background-image.png');

export const Register = () => {
  return (
    <RegisterView source={image}>
      <LogoView>
        <LogoText>cadastrar</LogoText>
      </LogoView>
      <FormView />
      <AnchorView>
        <NormalText>Já possui uma conta? <AnchorText>faça login</AnchorText></NormalText>
      </AnchorView>
    </RegisterView>
  )
}