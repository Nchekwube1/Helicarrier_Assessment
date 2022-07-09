import {View} from 'react-native';
import React, {FC} from 'react';
import {globalStyles} from '../../styles/Globalstyles';
import {actionBarProps} from '../../constants/types';
import colors from '../../constants/colors';
import TextComponent from '../text/TextComponent';
const ActionBar: FC<actionBarProps> = ({title, bg, color}) => {
  return (
    <View
      style={[
        globalStyles.w10,
        globalStyles.bgTransparent,
        globalStyles.flex,
        globalStyles.flexRow,
        globalStyles.relative,
        {
          height: 56,
          backgroundColor: bg ?? colors.Common,
        },
      ]}>
      <View
        style={[
          globalStyles.w10,
          globalStyles.h10,
          globalStyles.flexCenter,
          globalStyles.flexRow,
          globalStyles.justifyCenter,
          globalStyles.alignItemsCenter,
          globalStyles.absolute,
          globalStyles.px2,
          {
            zIndex: -2,
          },
        ]}>
        <TextComponent
          style={[
            globalStyles.textSizeMedium,
            globalStyles.w10,
            globalStyles.textCenter,
            globalStyles.fontNunitoSemiBold,
            globalStyles.textWhite,
            {color: color ?? colors.Black},
          ]}>
          {title}
        </TextComponent>
      </View>
    </View>
  );
};

export default ActionBar;
