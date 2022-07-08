import {Text, StyleProp, TextStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {globalStyles} from '../../styles/Globalstyles';

interface textProps {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  children: ReactNode;
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
