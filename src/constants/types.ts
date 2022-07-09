import {StyleProp, TextStyle} from 'react-native';

export type actionBarProps = {
  title: string;
  bg?: string;
  color?: string;
};

export interface textInputProps {
  value: any;
  setValue: any;
  onChangeText: (text: string) => void;
  style?: StyleProp<TextStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder: string;
  onPress?: () => void;
}
