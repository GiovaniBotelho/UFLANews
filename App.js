import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import COLORS from './src/config/colors';

import RootNavigator from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.gradientTop} />
      <SafeAreaView />
      <RootNavigator />
    </>
  );
};

export default App;
