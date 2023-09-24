import styled, { css } from 'styled-components/native';
import { CustomTextProps, FontSize, FontWeight, VariantsMapProps } from './types';

export const CustomText = styled.Text<{
  fontColor?: string;
  $fontSize: FontSize;
  $fontWeight: FontWeight;
}>`
  /* font-size: ${(props) => props.theme.typography.fontSize.lg};
  color: ${(props) => props.theme.color.black}; */
  color: ${(props) => props.fontColor};
`;

// export const fontSizeMap = (props: VariantsMapProps): Record<FontSize, ReturnType<typeof css>> => ({
//   [FontSize.SM]: css`
//     font-size: ${props.theme.typography.fontSize.sm};
//   `,
//   [FontSize.MD]: css`
//     font-size: ${props.theme.typography.fontSize.md};
//   `,
//   [FontSize.LG]: css`
//     font-size: ${props.theme.typography.fontSize.lg};
//   `,
// });

// export const fontWeightMap = (
//   props: VariantsMapProps
// ): Record<FontWeight, ReturnType<typeof css>> => ({
//   [FontWeight.REGULAR]: css`
//     font-family: ${props.theme.typography.fontWeight.regular};
//   `,
//   [FontWeight.BOLD]: css`
//     font-family: ${props.theme.typography.fontWeight.bold};
//   `,
// });
