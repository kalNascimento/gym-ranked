import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 14px 8px;
  height: 48px;
  font-size: 16px;
`;

export const LabelText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.Feedback.danger};
`;
