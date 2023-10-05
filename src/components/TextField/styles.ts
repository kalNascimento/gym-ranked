import styled from 'styled-components/native';

export const ContainerInputView = styled.View`
  gap: 4px;
`;

export const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 14px 8px;
  height: 48px;
  font-size: 16px;
`;
