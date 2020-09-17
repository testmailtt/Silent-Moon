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
      name={screens.auth.new_user_modal.welcome.key}
      component={screens.auth.new_user_modal.welcome.component}
      options={{ headerShown: false, gestureEnabled: false }}
      initialParams={{ topic: screens.auth.new_user_modal.topic.key }}
    />
    <RootStack.Screen
      name={screens.auth.new_user_modal.topic.key}
      component={screens.auth.new_user_modal.topic.component}
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
);

export default RootNavigator;
