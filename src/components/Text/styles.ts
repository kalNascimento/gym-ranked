import styled, { css } from 'styled-components/native';
import { FontSize, FontWeight, VariantsMapProps } from './types';

export const CustomText = styled.Text<{
  $fontColor?: string;
  $fontSize: FontSize;
  $fontWeight: FontWeight;
  $textAlign?: string;
}>`
  ${(props) => fontWeightMap({ theme: props.theme })[props.$fontWeight]};
  ${(props) => fontSizeMap({ theme: props.theme })[props.$fontSize]};
  color: ${(props) => (!props.$fontColor ? props.theme.colors.black : props.$fontColor)};
  text-align: ${(props) => (!props.$textAlign ? 'left' : props.$textAlign)};
`;

export const fontSizeMap = (props: VariantsMapProps): Record<FontSize, ReturnType<typeof css>> => ({
  [FontSize.XS]: css`
    font-size: ${props.theme.fontSize.xs};
  `,
  [FontSize.SM]: css`
    font-size: ${props.theme.fontSize.sm};
  `,
  [FontSize.MD]: css`
    font-size: ${props.theme.fontSize.md};
  `,
  [FontSize.LG]: css`
    font-size: ${props.theme.fontSize.lg};
  `,
});

export const fontWeightMap = (
  props: VariantsMapProps
): Record<FontWeight, ReturnType<typeof css>> => ({
  [FontWeight.REGULAR]: css`
    font-weight: ${props.theme.fontWeight.regular};
  `,
  [FontWeight.BOLD]: css`
    font-weight: ${props.theme.fontWeight.bold};
  `,
});
