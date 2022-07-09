import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import colors from '../constants/colors';
export const {width, height} = Dimensions.get('window');

export const globalStyles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.Background,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  bgWhite: {
    backgroundColor: colors.White,
  },
  textCenter: {textAlign: 'center'},
  textStart: {textAlign: 'left'},
  textEnd: {textAlign: 'right'},
  containerColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  contentView: {
    paddingHorizontal: 12,
    // paddingTop: '30@s',
    flex: 1,
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  borRadius: {
    borderRadius: 200,
  },
  flex: {
    display: 'flex',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  textBlack: {
    color: colors.Black,
  },
  textPrimary: {
    color: colors.Primary,
  },
  textYellow: {
    color: colors.yellowBg,
  },
  textWhite: {
    color: colors.White,
  },
  textLightGray: {
    color: colors.LightGray,
  },
  textGray: {
    color: colors.Gray,
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  textUpper: {
    textTransform: 'uppercase',
  },
  pt0: {paddingTop: 0},
  pt1: {paddingTop: 10},
  pt2: {paddingTop: 20},
  pt3: {paddingTop: 30},
  pt4: {paddingTop: 40},
  pt5: {paddingTop: 50},
  pt6: {paddingTop: 60},
  pt7: {paddingTop: 70},
  pt8: {paddingTop: 80},
  pt9: {paddingTop: 90},
  pt10: {paddingTop: 100},

  pb0: {paddingBottom: 0},
  pb1: {paddingBottom: 10},
  pb2: {paddingBottom: 20},
  pb3: {paddingBottom: 30},
  pb4: {paddingBottom: 40},
  pb5: {paddingBottom: 50},
  pb6: {paddingBottom: 60},
  pb7: {paddingBottom: 70},
  pb8: {paddingBottom: 80},

  pl0: {paddingLeft: 0},
  pl1: {paddingLeft: 10},
  pl2: {paddingLeft: 20},
  pl3: {paddingLeft: 30},
  pl4: {paddingLeft: 40},
  pl5: {paddingLeft: 50},

  pr0: {paddingRight: 0},
  pr1: {paddingRight: 10},
  pr2: {paddingRight: 20},
  pr3: {paddingRight: 30},
  pr4: {paddingRight: 40},
  pr5: {paddingRight: 50},

  px0: {paddingHorizontal: 0},
  px1: {paddingHorizontal: 10},
  px1p5: {paddingHorizontal: 15},
  px2: {paddingHorizontal: 20},
  px3: {paddingHorizontal: 30},
  px4: {paddingHorizontal: 40},
  px5: {paddingHorizontal: 50},

  py0: {paddingVertical: 0},
  py1: {paddingVertical: 10},
  py1p5: {paddingVertical: 15},
  py2: {paddingVertical: 20},
  py3: {paddingVertical: 30},
  py4: {paddingVertical: 40},
  py5: {paddingVertical: 50},

  mt1: {marginTop: 10},
  mt2: {marginTop: 20},
  mt3: {marginTop: 30},
  mt4: {marginTop: 40},
  mt5: {marginTop: 50},
  mt6: {marginTop: 60},
  mt7: {marginTop: 70},
  mt8: {marginTop: 80},
  mt9: {marginTop: 90},
  mt10: {marginTop: 100},

  mb1: {marginBottom: 10},
  mb2: {marginBottom: 20},
  mb3: {marginBottom: 30},
  mb4: {marginBottom: 40},
  mb5: {marginBottom: 50},
  mb6: {marginBottom: 60},
  mb7: {marginBottom: 70},
  mb8: {marginBottom: 80},
  mb9: {marginBottom: 90},
  mb10: {marginBottom: 100},

  ml0: {marginLeft: 0},
  ml1: {marginLeft: 10},
  ml2: {marginLeft: 20},
  ml3: {marginLeft: 30},
  ml4: {marginLeft: 40},
  ml5: {marginLeft: 50},

  mr0: {marginRight: 0},
  mr1: {marginRight: 10},
  mr2: {marginRight: 20},
  mr3: {marginRight: 30},
  mr4: {marginRight: 40},
  mr5: {marginRight: 50},
  mr1p3: {marginRight: '13%'},

  mx0: {marginHorizontal: 0},
  mx1: {marginHorizontal: 10},
  mx2: {marginHorizontal: 20},
  mx3: {marginHorizontal: 30},
  mx4: {marginHorizontal: 40},
  mx5: {marginHorizontal: 50},

  my0: {marginVertical: 0},
  my1: {marginVertical: 10},
  my2: {marginVertical: 20},
  my3: {marginVertical: 30},
  my4: {marginVertical: 40},
  my5: {marginVertical: 50},

  w1: {width: '10%'},
  w1p3: {width: '13%'},
  w2: {width: '20%'},
  w2p5: {width: '25%'},
  w3: {width: '30%'},
  w4: {width: '40%'},
  w4p5: {width: '45%'},
  w4p8: {width: '48%'},
  w4p9: {width: '49%'},
  w5: {width: '50%'},
  w6: {width: '60%'},
  w7: {width: '70%'},
  w8: {width: '80%'},
  w8p3: {width: '83%'},
  w9: {width: '90%'},
  w10: {width: '100%'},
  h1: {height: '10%'},
  h1p5: {height: '15%'},
  h2: {height: '20%'},
  h3: {height: '30%'},
  h4: {height: '40%'},
  h5: {height: '50%'},
  h6: {height: '60%'},
  h7: {height: '70%'},
  h8: {height: '80%'},
  h9: {height: '90%'},
  h9p5: {height: '95%'},
  h10: {height: '100%'},

  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  bgBackground: {
    backgroundColor: colors.Background,
  },
  bgWhite: {
    backgroundColor: colors.White,
  },
  bgBlack: {
    backgroundColor: colors.Black,
  },
  bgPrimary: {
    backgroundColor: colors.Primary,
  },

  bgGray: {
    backgroundColor: colors.Gray,
  },
  bgCounter: {
    backgroundColor: colors.counterBg,
  },
  bgLightGray: {
    backgroundColor: colors.LightGray,
  },
  bgInputGray: {
    backgroundColor: colors.bgInputGray,
  },

  bgTransparent: {
    backgroundColor: 'transparent',
  },
  textSizeXs: {
    fontSize: '11@s',
  },
  textSizeSmall: {
    fontSize: '13@s',
  },
  textSizeNormal: {
    fontSize: '14@s',
  },
  textSizeMedium: {
    fontSize: '16@s',
  },
  textSizeBig: {
    fontSize: '18@s',
  },
  textSize1xl: {
    fontSize: '20@s',
  },
  textSize2xl: {
    fontSize: '24@s',
  },
  textSize3xl: {
    fontSize: '30@s',
  },
  textSize4xl: {
    fontSize: '36@s',
  },
  fontNunitoRegular: {
    fontFamily: 'Nunito-Regular',
  },
  fontNunitoBold: {
    fontFamily: 'Nunito-Bold',
  },
  fontNunitoMedium: {
    fontFamily: 'Nunito-Medium',
  },
  fontNunitoSemiBold: {
    fontFamily: 'Nunito-SemiBold',
  },

  fontWeight900: {
    fontWeight: '900',
  },
  fontWeight700: {
    fontWeight: '700',
  },
  fontWeight600: {
    fontWeight: '600',
  },
  fontWeight400: {
    fontWeight: '400',
  },
  fontWeight300: {
    fontWeight: '300',
  },
  fontWeight200: {
    fontWeight: '200',
  },
  roundedFull: {
    borderRadius: 100,
  },

  textInputHeight: {
    height: '45@s',
  },
  borderRed: {
    borderColor: colors.error,
  },
  bgRed: {
    backgroundColor: colors.error,
  },
});
