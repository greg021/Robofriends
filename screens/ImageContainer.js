import React from 'react';
import {Text, View, Image, Share, TouchableOpacity} from 'react-native';

export default function ImageContainer({name}) {
  const URL = `https://robohash.org/${name}.png`;

  const shareMessage = () => {
    Share.share({
      url: URL,
    })
      .then((result) => console.log(result))
      .catch((errorMsg) => console.log(errorMsg));
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
            backgroundColor: '#00ff88',
          }}
          onPress={shareMessage}>
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
