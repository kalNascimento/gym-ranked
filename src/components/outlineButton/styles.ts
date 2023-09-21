import styled from "styled-components/native";

export const ButtonView = styled.View`
  background-color: transparent;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.border.button};
  border-radius: 8px;
`

export const ButtonContentView = styled.View`
  align-items: center;
  padding: 12px 16px;
`

export const ButtonText = styled.Text`
  text-transform: uppercase;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.font.title};
`