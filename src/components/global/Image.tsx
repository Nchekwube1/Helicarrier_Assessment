import {Image} from 'react-native';
import React from 'react';
import {ImageProp} from '../../constants/types';
import {globalStyles} from '../../styles/Globalstyles';

const ImageComponent: React.FC<ImageProp> = ({source, style, resizeMode}) => {
  return (
    <Image
      source={source}
      style={[
        globalStyles.relative,
        globalStyles.w10,
        globalStyles.h10,
        {resizeMode: resizeMode ? resizeMode : 'cover'},
        style,
      ]}
    />
  );
};

export default ImageComponent;
