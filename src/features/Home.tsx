import {View} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/Globalstyles';
import TextComponent from '../components/text/TextComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActionBar from '../components/global/ActionBar';
import colors from '../constants/colors';
import SearchInput from '../components/input/SearchInput';

const Home = () => {
  return (
    <>
      <ActionBar color={colors.White} title="Home" />
      <View style={[globalStyles.px2]}>
        <SearchInput />
        {/* <TextComponent
          style={[globalStyles.fontNunitoBold, globalStyles.textSize3xl]}>
          Home
        </TextComponent>
        <AntDesign name="leftcircle" size={45} /> */}
      </View>
    </>
  );
};

export default Home;
