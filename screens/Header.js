import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';

export default Header = () => {
  return (
    <Appbar.Header
      theme={{
        colors: {primary: '#0099ff'},
      }}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
      }}>
      <Title style={{color: 'white'}}>Robofriends</Title>
    </Appbar.Header>
  );
};
