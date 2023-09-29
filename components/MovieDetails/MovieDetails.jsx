import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const MovieDetails = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const WIDTH = Dimensions.get('screen').width;
  const HEIGHT = Dimensions.get('screen').height;

  const {movieId} = route?.params;

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A23',
        position: 'relative',
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#262532',
            borderRadius: 100,
            alignItems: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
          <Ionic name="chevron-back" style={{fontSize: 18, color: '#ffffff'}} />
        </TouchableOpacity>

        <Text
          style={{
            color: '#FFF',
            fontSize: 18,
            marginLeft: '25%',
          }}>
          Movie Details {movieId}
        </Text>
      </View>
      <View
        style={{
          width: WIDTH,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#ffffff20',
            width: WIDTH * 0.72,
            height: HEIGHT * 0.5,
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={{
              uri: 'https://images.pexels.com/photos/18344225/pexels-photo-18344225/free-photo-of-coffee-place-prague.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            }}
          />
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#ffffff20',
              position: 'absolute',
              top: 20,
              right: 20,
              zIndex: 1,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 8,
              }}
              source={{
                uri: 'https://images.pexels.com/photos/18344225/pexels-photo-18344225/free-photo-of-coffee-place-prague.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
              }}
            />
            <Image
              source={{
                uri: 'https://www.pexels.com/photo/furniture-minimalism-18468852/',
              }}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
        </View>
        <Text
          style={{
            color: '#FFF',
            fontSize: 24,
            maxWidth: WIDTH * 0.6,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 20,
          }}>
          Movie Name
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: WIDTH * 0.7,
            marginBottom: 20,
          }}>
          <Text style={{color: '#FFF', fontSize: 12, opacity: 0.4}}>
            Lorem ipsum
          </Text>
          <Text style={{color: '#FFF', fontSize: 12, opacity: 0.4}}>
            Lorem ipsum dolor
          </Text>
          <Text style={{color: '#FFF', fontSize: 12, opacity: 0.4}}>
            10h 10min
          </Text>
        </View>
        <View
          style={{
            width: WIDTH,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingHorizontal: 80,
            marginBottom: 30,
          }}>
          <Text
            style={{color: '#ffffff', fontWeight: 'bold', letterSpacing: 2}}>
            IDMg
          </Text>
        </View>
        <View
          style={{
            width: WIDTH,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              width: WIDTH * 0.5,
              paddingVertical: 10,
              backgroundColor: '#ff0000',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
              position: 'relative',
            }}>
            <View
              style={{
                width: 18,
                aspectRatio: 1 / 1,
                borderRadius: 100,
                backgroundColor: '#1A1A23',
                position: 'absolute',
                left: -12,
                top: '50%',
              }}></View>
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  letterSpacing: 2,
                  fontSize: 14,
                }}>
                'Buy Tickets'
              </Text>
            )}
            <View
              style={{
                width: 18,
                aspectRatio: 1 / 1,
                borderRadius: 100,
                backgroundColor: '#1A1A23',
                position: 'absolute',
                right: -12,
                top: '50%',
              }}></View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: WIDTH,
          height: HEIGHT * 0.5,
          position: 'absolute',
          zIndex: -1,
          opacity: 1,
          alignItems: 'center: ',
          overflow: 'hidden',
        }}>
        <LinearGradient
          colors={['#1A1A2300', '#1A1A2390', '#1A1A23', '#1A1A23']}
          style={{
            width: WIDTH,
            height: 80,
            position: 'absolute',
            zIndex: 1,
            bottom: 0,
          }}></LinearGradient>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/18344225/pexels-photo-18344225/free-photo-of-coffee-place-prague.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          }}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            opacity: 0.2,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
