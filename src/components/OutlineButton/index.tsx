import { PropsWithChildren } from 'react';
import { TouchableHighlight } from 'react-native';
import { OutlineButtonProps } from './types';
import { theme } from '../../theme/Theme';
import { ButtonView, ButtonContentView, ButtonText } from './styles';

export const OutlineButton = ({
  onPress,
  style,
  children,
}: PropsWithChildren<OutlineButtonProps>) => {
  return (
    <ButtonView style={style}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.75}
        underlayColor={theme.light.colors.white}
      >
        <ButtonContentView>
          <ButtonText>{children}</ButtonText>
        </ButtonContentView>
      </TouchableHighlight>
    </ButtonView>
  );
};
