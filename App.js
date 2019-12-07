import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import COLORS from './src/config/colors';

import RootNavigator from './src/navigation';
import store from './src/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.gradientTop} />
      <SafeAreaView />
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </>
  );
};

export default App;
