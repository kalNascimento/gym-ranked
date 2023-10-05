import { CustomText } from './styles';
import { CustomTextProps, FontSize, FontWeight } from './types';

export const Text = ({
  children,
  fontColor,
  textAlign,
  fontSize = FontSize.LG,
  fontWeight = FontWeight.REGULAR,
  ...props
}: CustomTextProps) => {
  return (
    <CustomText
      $fontColor={fontColor}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $textAlign={textAlign}
      {...props}
    >
      {children}
    </CustomText>
  );
};
