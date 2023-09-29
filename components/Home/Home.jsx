import {useState, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import React from 'react';

const moviesData = [
  {
    id: 1,
    name: 'Movie 1',
    img: 'https://images.pexels.com/photos/18423422/pexels-photo-18423422/free-photo-of-art-abstract-moon-design.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    release: '24/6/2005',
  },
  {
    id: 2,
    name: 'Movie2',
    img: 'https://images.pexels.com/photos/18151462/pexels-photo-18151462/free-photo-of-medusa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    release: '24/6/2005',
  },
  {
    id: 3,
    name: 'Movie 3',
    img: 'https://images.pexels.com/photos/18423422/pexels-photo-18423422/free-photo-of-art-abstract-moon-design.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    release: '24/6/2005',
  },
  {
    id: 4,
    name: 'Movie 4',
    img: 'https://images.pexels.com/photos/18151462/pexels-photo-18151462/free-photo-of-medusa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    release: '24/6/2005',
  },
];
const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const WIDTH = Dimensions.get('screen').width;
  const ITEM_WIDTH = WIDTH * 0.72;
  const MOVIE_SPACER_WIDTH = (WIDTH - ITEM_WIDTH) / 2;
  const scrollX = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   getMoviesDataFromDB(page);
  // }, [page]);

  // const getMoviesDataFromDB = async page => {
  //   setIsLoading(true);
  //   await axios
  //     .get(
  //       `${APP_BASE_URL}/movie/popular?api_key=${APP_API_KEY}&page=${page}`,
  //     )
  //     .then(res => setMoviesData([...moviesData, ...res.data.results]))
  //     .catch(err => console.log(err));
  //   setIsLoading(false);
  // };

  const handelOnEnd = () => {
    setIsLoading(true);
    //setPage(page + 1);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#1A1A23',
        width: '100%',
        height: '100%',
        padding: 0,
        position: 'relative',
      }}>
      <StatusBar backgroundColor="#1A1A23" barStyle="light-content" />
      <View
        style={{
          width: '100%',
          padding: 20,
          marginBottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 30,
                fontWeight: 'bold',
                marginRight: 10,
              }}>
              Hello
            </Text>
            <Text style={{color: '#FFFFFF', fontSize: 30, fontWeight: '300'}}>
              John
            </Text>
          </View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: '300',
              opacity: 0.4,
            }}>
            Watch your favorite movies
          </Text>
        </View>
        <View>
          <Text>1</Text>
        </View>
        <View>
          <Text>1</Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            backgroundColor: '#ffffff30',
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 100,
              resizeMode: 'cover',
            }}
            source={require('../../src/images/Profile.jpg')}
          />
        </View>
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: '#262532',
            paddingHorizontal: 20,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 10,
          }}>
          <TextInput placeholder="Search" placeholderTextColor="#70717A" />
          <Ionic
            name="mic-outline"
            style={{fontSize: 18, opacity: 0.4, color: '#FFFFFF'}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          marginBottom: 20,
          marginTop: 10,
        }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 16,
            marginRight: 8,
            fontWeight: 'bold',
          }}>
          Latest
        </Text>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 16,
            marginRight: 8,
            fontWeight: 'bold',
          }}>
          Movies
        </Text>
      </View>

      {isLoading && (
        <View
          style={{
            position: 'absolute',
            right: 10,
            top: '60%',
            height: 20,
            zIndex: 1,
          }}>
          <ActivityIndicator size="small" color="#FFF" />
        </View>
      )}

      <FlatList
        data={moviesData}
        horizontal
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="start"
        decelerationRate={0.6}
        scrollEventThrottle={64}
        onEndReached={handelOnEnd}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                width: MOVIE_SPACER_WIDTH,
                height: 300,
              }}></View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View
              style={{
                width: MOVIE_SPACER_WIDTH,
                height: 300,
              }}></View>
          );
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          position: 'relative',
          paddingBottom: 70,
          zIndex: 1,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];

          let translateY = scrollX.interpolate({
            inputRange,
            outputRange: [50, 0, 50],
          });

          const rotateY = scrollX.interpolate({
            inputRange,
            outputRange: ['4deg', '0deg', '-4deg'],
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          const elevationX = scrollX.interpolate({
            inputRange,
            outputRange: [0, 8, 0],
          });
          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                position: 'relative',
                paddingHorizontal: 24,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MovieDetails', {
                    movieId: item.id,
                  })
                }
                activeOpacity={0.9}
                style={{backgroundColor: 'transparent'}}>
                <Animated.View
                  style={{
                    paddingHorizontal: 0,
                    height: 300,
                    elevation: elevationX,
                    shadowColor: '#FFFFFF',
                    borderRadius: 34,
                    transform: [{translateY}, {rotateZ: rotateY}],
                  }}>
                  <Image
                    source={{uri: item.img}}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 34,
                      backgroundColor: 'transparent',
                    }}
                  />
                </Animated.View>
                <Animated.Text
                  style={{
                    color: 'white',
                    marginTop: 10,
                    fontSize: 14,
                    letterSpacing: 2,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    opacity,
                    transform: [{translateY}, {rotateZ: rotateY}],
                  }}>
                  {item.name}
                </Animated.Text>
                <Animated.Text
                  style={{
                    color: '#FFF',
                    marginTop: 10,
                    fontSize: 14,
                    letterSpacing: 2,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    opacity: 0.2,
                    transform: [{translateY: translateY}],
                  }}>
                  {item.release}
                </Animated.Text>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
