import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import Search from './screens/Search';
import ImageContainer from './screens/ImageContainer';

const App = () => {
  const [name, setName] = useState('my robot');

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0099ff" />
      <Search setName={setName} />
      <ImageContainer name={name} />
    </>
  );
};

export default App;
