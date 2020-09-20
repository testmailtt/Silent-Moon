import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import screens from './screens';

const TabStack = createBottomTabNavigator();

const AuthNavigator = () => (
  <TabStack.Navigator initialRouteName="Home">
    <TabStack.Screen
      name={screens.app.home.key}
      component={screens.app.home.component}
      options={{ headerShown: false }}
    />
  </TabStack.Navigator>
);

export default AuthNavigator;
