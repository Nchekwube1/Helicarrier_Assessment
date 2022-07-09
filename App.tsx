/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import colors from './src/constants/colors';

import Home from './src/features/Home';
import {globalStyles} from './src/styles/Globalstyles';
export const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const App = () => {
  return (
    <View
      style={[
        Platform.OS === 'android' && globalStyles.pt1,
        {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: colors.bgInputGray,
        },
      ]}>
      <SafeAreaView
        style={{
          height: STATUSBAR_HEIGHT,
          backgroundColor: colors.Common,
        }}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={colors.Common}
        />
      </SafeAreaView>
      <Home />
    </View>
  );
};

export default App;
