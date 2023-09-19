import styled from "styled-components/native";

export const RegisterView = styled.ImageBackground`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const LogoView = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.tomorrow};
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: capitalize;
`;

export const FormView = styled.View`
  flex: 6;
`;

export const AnchorView = styled.View`
  flex: 3;
  padding-top: 32px;
  align-items: center;
`;

export const NormalText = styled.Text`
font-size: ${({ theme }) => theme.fontSize.sm};
color: ${({ theme }) => theme.colors.white};
`

export const AnchorText = styled.Text`
  text-decoration: underline;
`