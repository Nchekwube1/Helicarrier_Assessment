import {Text, StyleProp, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {globalStyles} from '../../styles/Globalstyles';

interface textProps {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}
const TextComponent: FC<textProps> = ({style, numberOfLines, children}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        globalStyles.fontNunitoRegular,
        globalStyles.textSizeNormal,
        globalStyles.textBlack,
        style,
      ]}>
      {children}
    </Text>
  );
};

export default TextComponent;
