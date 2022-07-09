import {View, TextInput} from 'react-native';
import React, {FC, useState} from 'react';
import colors from '../../constants/colors';
import {globalStyles} from '../../styles/Globalstyles';
import {inputStyles} from './inputStyles';
import {textInputProps} from '../../constants/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
        globalStyles.flexRow,
        globalStyles.alignItemsCenter,
        globalStyles.mt1,
        globalStyles.mb1,
        globalStyles.w10,
        globalStyles.bgInputGray,
        focus && inputStyles.inputFocused,
        {
          borderRadius: 8,
          height: 60,
          borderColor: colors.borderColor,
          borderWidth: 1,
        },
        style,
      ]}>
      <View style={[globalStyles.pl1]}>
        <Ionicons name="search" size={23} color={colors.Common} />
      </View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onPress}
        style={[
          globalStyles.bgWhite,
          globalStyles.textBlack,
          globalStyles.absolute,
          globalStyles.h10,
          globalStyles.textInputHeight,
          globalStyles.px1,
          globalStyles.relative,
          globalStyles.fontNunitoRegular,
          globalStyles.textSizeNormal,
          {
            flex: 1,
            backgroundColor: 'transparent',
            borderRadius: 8,
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
