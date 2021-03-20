import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Text, View, Keyboard} from 'react-native';
import Header from './Header';

export default Search = ({setName}) => {
  const [text, setText] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#d4e4f0'}}>
      <Header />
      <TextInput
        label="Robot name"
        style={{backgroundColor: '#eeeeee'}}
        theme={{colors: {primary: '#0099ff'}}}
        value={text}
        onChangeText={(t) => setText(t)}
      />
      <Button
        theme={{colors: {primary: '#0099ff'}}}
        mode="contained"
        style={{marginVertical: 10, marginHorizontal: 50}}
        onPress={() => {
          setName(text);
          Keyboard.dismiss();
        }}>
        <Text style={{color: 'white'}}>Search Robot</Text>
      </Button>
    </View>
  );
};
