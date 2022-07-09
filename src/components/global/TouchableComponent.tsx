import React from 'react';
import {TouchableProps} from '../../constants/types';
import {TouchableOpacity} from 'react-native';

const TouchableComponent: React.FC<TouchableProps> = ({
  children,
  disabled,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[style]}
      hitSlop={{right: 10, left: 10, bottom: 10, top: 10}}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableComponent;
