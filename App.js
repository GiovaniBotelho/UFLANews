import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import RootNavigator from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />    
      <RootNavigator />
    </>
  );
};

export default App;
