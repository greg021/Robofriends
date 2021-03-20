import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Share from 'react-native-share';
import memes from '../assets/base64';

export default function ImageContainer({name}) {
  const URL = `https://robohash.org/${name}`;

  const myCustomShare = async () => {
    const shareOptions = {
      message: 'The Anonymous Robot',
      url: URL,
      // url: URL, // if image is a base64 image ( from database )
    };
    try {
      const shareResponse = await Share.open(shareOptions);
      console.log(shareResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        borderColor: '#0088ff',
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 2,

        overflow: 'hidden',
        position: 'absolute',
        top: 180,
        right: 70,
        left: 70,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{
            uri: URL,
          }}
        />
      </View>
      <View style={{}}>
        <Text
          style={{
            color: 'white',
            backgroundColor: '#0088ff',
            fontSize: 16,
            textAlign: 'center',
            padding: 5,
          }}>
          {name}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            justifyContent: 'center',
            padding: 5,
            backgroundColor: '#00f288',
          }}
          onPress={myCustomShare}>
          <Text
            style={{
              color: '#002',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Share {name}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
