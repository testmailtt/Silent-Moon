/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { StatusBar } from 'react-native';

import store from 'redux/store';

import RootNavigator from 'navigation/RootNavigator';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
          <StatusBar hidden />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
