import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import screens from './screens';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName={screens.auth.auth_greeting.key}>
    <Stack.Screen
      name={screens.auth.auth_greeting.key}
      component={screens.auth.auth_greeting.component}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={screens.auth.auth_signin.key}
      component={screens.auth.auth_signin.component}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
