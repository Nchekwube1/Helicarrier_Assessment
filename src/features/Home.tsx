import {
  Platform,
  ScrollView,
  SectionList,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {globalStyles} from '../styles/Globalstyles';
import TextComponent from '../components/text/TextComponent';
import colors from '../constants/colors';
import SearchInput from '../components/input/SearchInput';
import ImageComponent from '../components/global/Image';
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
  const {loading, error, data: apiData} = useQuery(GET_POKEMONS);
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState<{title: string; data: any[]}[]>([]);
  const [current, setCurrent] = useState('All');
  const [searching, setSearching] = useState(false);
  const [emptyState, setEmptyState] = useState(false);
  const filterTexts = ['All', 'Male', 'Female', 'Human', 'Alive', 'Dead'];
  // const [data, setData] = useState<any[]>([]);

  const data = useMemo(() => {
    if (searching === true && searchValue !== '') {
      const filterdata = apiData?.characters.results.filter((val: any) => {
        return val.name.toLowerCase().includes(searchValue.toLowerCase());
      });

      return filterdata;
    }

    return apiData?.characters.results;
  }, [apiData, searchValue, searching]);
  useEffect(() => {
    console.log({items});
  }, [items]);
  useEffect(() => {
    const checker = items.filter(item => {
      return item.data.length > 0;
    });
    console.log({checker});

    if (checker.length === 0) {
      setEmptyState(true);
    } else {
      setEmptyState(false);
    }
  }, [items]);
  useEffect(() => {
    console.log({emptyState});
  }, [emptyState]);
  useEffect(() => {
    const mockDate = [
      '11th April 2020',
      '20th October 2020',
      '4th January 2022',
      '11 March 2021',
      '12th June 2022',
    ];
    console.log({'dataaaaaaaa====>': data});
    let dataRes: any[] =
      current === 'All'
        ? data
        : current === 'Female'
        ? data?.filter((val: any) => {
            return val.gender === 'Female';
          })
        : current === 'Human'
        ? data?.filter((val: any) => {
            return val.species === 'Human';
          })
        : current === 'Male'
        ? data?.filter((val: any) => {
            return val.gender === 'Male';
          })
        : current === 'Alive'
        ? data?.filter((val: any) => {
            return val.status === 'Alive';
          })
        : data?.filter((val: any) => {
            return val.status === 'Dead';
          });
    const first4 = dataRes?.slice(0, 4);
    const second4 = dataRes?.slice(4, 8);
    const third4 = dataRes?.slice(8, 12);
    const fourth4 = dataRes?.slice(12, 16);
    const fifth4 = dataRes?.slice(16, 20);
    console.log({fifth4}, {first4}, {second4}, {third4}, {fourth4});
    first4 &&
      setItems([
        {
          title: mockDate[0],
          data: first4,
        },
        {
          title: mockDate[1],
          data: second4,
        },
        {
          title: mockDate[2],
          data: third4,
        },
        {
          title: mockDate[3],
          data: fourth4,
        },
        {
          title: mockDate[4],
          data: fifth4,
        },
      ]);
  }, [data, current]);

  useEffect(() => {
    console.log(items);
  }, [searching, items]);

  const onPress = () => {
    console.log({searchValue});
    setSearching(true);
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
            20 Available Characters
          </TextComponent>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            padding: 1,
            borderWidth: 2,
            borderColor: colors.Secondary,
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
          setValue={setSearchValue}
          placeholder="Search by name"
          onChangeText={text => setSearchValue(text)}
          onPress={onPress}
        />
        <ScrollView
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          style={[
            globalStyles.w10,
            globalStyles.flex,
            globalStyles.mb1,
            // globalStyles.bgBlack,
          ]}>
          {filterTexts.map(text => {
            return (
              <TouchableOpacity
                key={text}
                onPress={() => setCurrent(text)}
                style={[
                  // globalStyles.mr2,
                  globalStyles.bgCounter,
                  globalStyles.py1,
                  globalStyles.justifyCenter,
                  globalStyles.alignItemsCenter,
                  text === current && globalStyles.bgCommon,

                  {width: 80, borderRadius: 62, marginRight: 13},
                ]}>
                <TextComponent
                  style={[text === current && globalStyles.textWhite]}>
                  {text}
                </TextComponent>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={[Platform.OS === 'ios' && globalStyles.mb2, {flex: 1}]}>
        {items.length > 0 && emptyState === false && (
          <SectionList
            ListEmptyComponent={() => (
              <View>
                <TextComponent>Empty</TextComponent>
              </View>
            )}
            sections={items}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View
                style={[
                  globalStyles.flex,
                  globalStyles.flexRow,
                  globalStyles.justifyBetween,
                  globalStyles.mt2,
                ]}>
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
                      uri: item.image,
                    }}
                  />
                </View>
                <View style={[globalStyles.ml2, {flex: 1}]}>
                  <TextComponent
                    style={[
                      globalStyles.fontNunitoSemiBold,
                      globalStyles.textSizeBig,
                    ]}>
                    {item.name}
                  </TextComponent>
                  <View style={[globalStyles.flex, globalStyles.flexRow]}>
                    <TextComponent
                      style={[
                        globalStyles.textSizeNormal,
                        globalStyles.fontNunitoRegular,
                        globalStyles.textGray,
                      ]}>
                      • {item.gender}
                    </TextComponent>
                    <TextComponent
                      style={[
                        globalStyles.textSizeNormal,
                        globalStyles.fontNunitoRegular,
                        globalStyles.ml1,
                        globalStyles.textGray,
                      ]}>
                      • {item.species}
                    </TextComponent>
                    <TextComponent
                      style={[
                        globalStyles.textSizeNormal,
                        globalStyles.fontNunitoRegular,
                        globalStyles.ml1,
                        globalStyles.textGray,
                      ]}>
                      • {item.status}
                    </TextComponent>
                  </View>
                </View>
              </View>
            )}
            renderSectionHeader={({section: {title, data}}) =>
              data.length > 0 ? (
                <TextComponent
                  style={[
                    globalStyles.fontNunitoSemiBold,
                    globalStyles.textSizeBig,
                    globalStyles.textCommon,
                  ]}>
                  {title}
                </TextComponent>
              ) : (
                <></>
              )
            }
          />
        )}
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
        {!loading && emptyState && (
          <View
            style={[
              globalStyles.mb10,
              globalStyles.justifyCenter,
              globalStyles.alignItemsCenter,
              {flex: 1},
            ]}>
            <LottieView
              source={require('../assets/animations/81845-sad-face.json')}
              autoPlay
              loop
              style={{width: 200, height: 200}}
            />
            <TextComponent>No character found</TextComponent>
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
