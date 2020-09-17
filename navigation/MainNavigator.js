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
      initialParams={{
        auth_signup: screens.auth.auth_signup.key,
        auth_signin: screens.auth.auth_signin.key,
      }}
    />
    <Stack.Screen
      name={screens.auth.auth_signin.key}
      component={screens.auth.auth_signin.component}
      options={{ headerShown: false }}
      initialParams={{
        auth_signup: screens.auth.auth_signup.key,
        auth_signin: screens.auth.auth_signin.key,
      }}
    />
    <Stack.Screen
      name={screens.auth.auth_signup.key}
      component={screens.auth.auth_signup.component}
      options={{ headerShown: false }}
      initialParams={{
        auth_signup: screens.auth.auth_signup.key,
        welcome: screens.auth.new_user_modal.key,
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
