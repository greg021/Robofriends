import React from 'react';
import {Text, View, Image} from 'react-native';

export default function ImageContainer({name}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 200,
        marginTop: 10,
      }}>
      <View
        style={{
          borderColor: '#0088ff',
          borderRadius: 15,
          borderStyle: 'solid',
          borderWidth: 2,
          overflow: 'hidden',
          maxWidth: 204,
        }}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{
            uri: `https://robohash.org/${name}.png`,
          }}
        />
        <View
          style={{
            marginTop: 5,
          }}>
          <Text
            style={{
              color: 'white',
              backgroundColor: '#0088ff',
              fontSize: 20,
              textAlign: 'center',
              padding: 5,
            }}>
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
}
