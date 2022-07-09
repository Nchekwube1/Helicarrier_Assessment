import {View, TextInput} from 'react-native';
import React, {FC, useState} from 'react';
import colors from '../../constants/colors';
import {globalStyles} from '../../styles/Globalstyles';
import {inputStyles} from './inputStyles';
import {textInputProps} from '../../constants/types';

const SearchInput: FC<textInputProps> = ({
  onChangeText,
  placeholder,
  value,
  onBlur,
  onFocus,
  onPress,
  style,
}) => {
  const [focus, setFocus] = useState(false);

  const changeFocus = () => {
    if (onFocus) {
      onFocus();
    }
    setFocus(true);
  };
  const blur = () => {
    setFocus(false);
    if (onBlur) {
      onBlur();
    }
  };
  return (
    <View
      style={[
        globalStyles.flex,
        // globalStyles.bgYellow,
        // globalStyles.textInputHeight,
        globalStyles.mt1,
        globalStyles.mb1,
        globalStyles.w10,
        globalStyles.flexColumn,
        globalStyles.bgInputGray,
        {
          borderRadius: 8,
        },
        style,
      ]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onPress}
        style={[
          globalStyles.bgWhite,
          globalStyles.textBlack,
          globalStyles.absolute,
          globalStyles.w10,
          globalStyles.h10,
          globalStyles.textInputHeight,
          {borderRadius: 8},
          {borderColor: colors.borderColor, borderWidth: 1},
          globalStyles.px1,
          focus && inputStyles.inputFocused,
          globalStyles.relative,
          globalStyles.fontNunitoRegular,
          {
            // flex: 1,
            width: '100%',
            backgroundColor: 'transparent',
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.Gray}
        onFocus={changeFocus}
        onBlur={blur}
      />
    </View>
  );
};

export default SearchInput;
