import {Platform, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../styles/Globalstyles';
import TextComponent from '../components/text/TextComponent';
import colors from '../constants/colors';
import SearchInput from '../components/input/SearchInput';
import ImageComponent from '../components/global/Image';
import {PulseIndicator} from 'react-native-indicators';
import {gql, useQuery} from '@apollo/client';
import LottieView from 'lottie-react-native';

const Home = () => {
  const GET_POKEMONS = gql`
    query ExampleQuery($charactersPage2: Int) {
      characters(page: $charactersPage2) {
        results {
          created
          image
          name
          status
          species
          gender
          id
        }
      }
    }
  `;
  const {loading, error, data} = useQuery(GET_POKEMONS);
  useEffect(() => {
    let dataRes = data?.characters.results;
    console.log({dataRes});
  }, [data]);
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);
  const mockDate = [
    {
      date: '20th October 2020',
    },
    {
      date: '11 March 2021',
    },
    {
      date: '12th June 2022',
    },
    {
      date: '4th January 2022',
    },
    {
      date: '11th April 2020',
    },
  ];
  const onPress = () => {
    console.log({searchValue});
  };
  return (
    <View style={[globalStyles.px2, {flex: 1}]}>
      <View
        style={[
          globalStyles.flex,
          globalStyles.flexRow,
          globalStyles.justifyBetween,
          globalStyles.mt2,
        ]}>
        <View>
          <TextComponent
            style={[globalStyles.fontNunitoSemiBold, globalStyles.textSizeBig]}>
            Hi Francis
          </TextComponent>
          <TextComponent
            style={[
              globalStyles.textSecondary,
              globalStyles.textSizeNormal,
              globalStyles.fontNunitoSemiBold,
            ]}>
            20 Available Pokemons
          </TextComponent>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            padding: 1,
            borderWidth: 2,
            borderColor: colors.Common,
          }}>
          <ImageComponent
            style={{
              borderRadius: 30,
            }}
            source={{
              uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1eb0b30-372f-418d-89be-58e821a3639c/d8yzuy3-1cc136c9-f952-437f-8010-cfd86d932251.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxZWIwYjMwLTM3MmYtNDE4ZC04OWJlLTU4ZTgyMWEzNjM5Y1wvZDh5enV5My0xY2MxMzZjOS1mOTUyLTQzN2YtODAxMC1jZmQ4NmQ5MzIyNTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hsgFX6OS51pLP-Uq7sWXBGJ-Xfqv58oH-wdHCblycxQ',
            }}
          />
        </View>
      </View>
      <View style={[globalStyles.mt1]}>
        <SearchInput
          value={searchValue}
          placeholder="Search"
          onChangeText={text => setSearchValue(text)}
          onPress={onPress}
        />
      </View>
      <View style={[Platform.OS === 'ios' && globalStyles.mb2, {flex: 1}]}>
        {loading && (
          <View
            style={[
              globalStyles.mb10,
              globalStyles.justifyCenter,
              globalStyles.alignItemsCenter,
              {flex: 1},
            ]}>
            {/* <PulseIndicator color={colors.Secondary} size={55} /> */}
            <LottieView
              source={require('../assets/animations/111529-rocket.json')}
              autoPlay
              loop
              style={{width: 200, height: 200}}
            />
          </View>
        )}
        {error && (
          <View
            style={[
              globalStyles.mb10,
              globalStyles.justifyCenter,
              globalStyles.alignItemsCenter,
              {flex: 1},
            ]}>
            <LottieView
              source={require('../assets/animations/98642-error-404.json')}
              autoPlay
              loop
              style={{width: 200, height: 200}}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
