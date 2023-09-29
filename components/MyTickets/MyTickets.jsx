import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const movies = [
  {
    id: 1,
    title: 'Orazio',
    last_name: 'Bolesma',
    email: 'obolesma0@blog.com',
    gender: 'Male',
    ip_address: '113.163.51.120',
  },
  {
    id: 2,
    title: 'Mariska',
    last_name: 'Otterwell',
    email: 'motterwell1@wikimedia.org',
    gender: 'Female',
    ip_address: '250.230.197.233',
  },
  {
    id: 3,
    title: 'Katee',
    last_name: 'BoHlingolsen',
    email: 'kbohlingolsen2@archive.org',
    gender: 'Female',
    ip_address: '76.123.99.213',
  },
  {
    id: 4,
    title: 'Tomaso',
    last_name: 'Huot',
    email: 'thuot3@sciencedaily.com',
    gender: 'Male',
    ip_address: '215.32.14.75',
  },
  {
    id: 5,
    title: 'Myranda',
    last_name: 'Padula',
    email: 'mpadula4@biblegateway.com',
    gender: 'Non-binary',
    ip_address: '130.163.99.66',
  },
  {
    id: 6,
    title: 'Euphemia',
    last_name: 'Abbess',
    email: 'eabbess5@tmall.com',
    gender: 'Female',
    ip_address: '88.19.81.240',
  },
  {
    id: 7,
    title: 'Shannen',
    last_name: 'Bentham3',
    email: 'sbentham6@ibm.com',
    gender: 'Female',
    ip_address: '239.168.2.187',
  },
  {
    id: 8,
    title: 'Gwenore',
    last_name: 'Smithend',
    email: 'gsmithend7@elegantthemes.com',
    gender: 'Female',
    ip_address: '126.165.111.67',
  },
  {
    id: 9,
    title: 'Corella',
    last_name: 'Trumpeter',
    email: 'ctrumpeter8@stanford.edu',
    gender: 'Female',
    ip_address: '88.36.23.21',
  },
  {
    id: 10,
    title: 'Conway',
    last_name: 'Olivie',
    email: 'colivie9@fc2.com',
    gender: 'Male',
    ip_address: '2.164.253.129',
  },
];

const MyTickets = ({navigation}) => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      getTicketsDataFromStorage();

      return unsub;
    });
  }, [navigation]);

  const getTicketsDataFromStorage = () => {
    setMoviesData(movies);
    // setIsLoading(true);
    // let items = await AsyncStorage.getItem('tickets');
    // items = JSON.parse(items);
    // let movies = [];
    // if (items) {
    //   for (let index = 0; index < items?.length; index++) {
    //     await axios
    //       .get(`${APP_BASE_URL}/movie/${items[index]}?api_key=${APP_API_KEY}`)
    //       .then(movie => {
    //         movies.push(movie.data);
    //       })
    //       .catch(err => console.log(err));
    //   }
    //   setMoviesData(movies);
    //   setIsLoading(false);
    // } else {
    //   setIsLoading(false);
    // }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#1A1A23',
        width: '100%',
        minHeight: '100%',
        paddingVertical: 20,
        position: 'relative',
      }}>
      <FlatList
        data={moviesData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: 70,
          justifyContent: 'center',
          zIndex: 1,
          alignItems: 'center',
        }}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
                position: 'relative',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginRight: 10,
                }}>
                My
              </Text>
              <Text style={{color: '#ffffff', fontSize: 30, fontWeight: '300'}}>
                Tickets
              </Text>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <>
              {isLoading && (
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    paddingVertical: 40,
                  }}>
                  <ActivityIndicator size="small" color="#FFF" />
                </View>
              )}
            </>
          );
        }}
        renderItem={({item, index}) => {
          return (
            <>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: '86%',
                  aspectRatio: 3.5 / 2,
                  marginVertical: 20,
                  marginRight: 6,
                }}>
                <LinearGradient
                  colors={['#23252F', '#13141B']}
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: 14,
                    elevation: 1,
                    shadowColor: '#FFFFFF',
                    position: 'relative',
                    flexDirection: 'row',
                    borderRadius: 30,
                  }}>
                  <Image
                    source={{
                      uri: 'https://images.pexels.com/photos/4310975/pexels-photo-4310975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    }}
                    style={{
                      height: '100%',
                      aspectRatio: 2 / 3,
                      backgroundColor: 'gray',
                      borderRadius: 15,
                      marginRight: 20,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 19,
                        maxHeight: 64,
                        overflow: 'hidden',
                      }}>
                      {item.title}
                    </Text>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginBottom: 8,
                        }}>
                        <Icon
                          name="star"
                          style={{color: '#F9AC2B', marginRight: 6}}
                        />
                        <Text style={{color: '#F9AC2B', fontSize: 12}}>30</Text>
                      </View>
                      {/* style={{
                        color: '#ffffff',
                        opacity: 0.4,
                        fontSize: 12,
                        maxHeight: 20,
                        overflow: 'hidden', */}
                      <Text
                        style={{
                          color: '#FFFFFF',
                          opacity: 0.4,
                          fontSize: 12,
                          maxHeight: 20,
                          overflow: 'hidden',
                        }}>
                        2014-04-22
                      </Text>
                    </View>
                    <View
                      style={{
                        // backgroundColor: '#F9AC2B',
                        // borderRadius: 100,
                        // paddingHorizontal: 10,
                        // paddingVertical: 4,
                        // position: 'absolute',
                        // bottom: 26,
                        // right: -34,
                        backgroundColor: '#F9AC2B',
                        borderRadius: 100,
                        paddingHorizontal: 10,
                        paddingVertical: 4,
                        position: 'absolute',
                        bottom: 26,
                        right: -34,
                      }}>
                      <Text style={{color: '#000000', fontWeight: '500'}}>
                        IMDB 333
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default MyTickets;

const styles = StyleSheet.create({});
