import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import screens from './screens';
import MainNavigator from './MainNavigator';

const RootStack = createStackNavigator();

const RootNavigator = () => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Main"
      component={MainNavigator}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name={screens.auth.new_user_modal.key}
      component={screens.auth.new_user_modal.component}
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
);

export default RootNavigator;
