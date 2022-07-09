import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../constants/colors';

export const inputStyles = ScaledSheet.create({
  iconView: {
    position: 'absolute',
    right: 25,
    top: 14,
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: colors.Primary,
  },
  pinInput: {
    flexDirection: 'row',
    marginVertical: 20,
    padding: 17,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // elevation: 5,
    // backgroundColor: colors.Background,
  },
  pin: {
    // height: 15,
    width: 45,
    // backgroundColor: colors.Gray,
    // borderRadius: 50,
    marginHorizontal: 10,
  },
});
