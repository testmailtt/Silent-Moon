import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBarView } from 'components/TabBar';

import screens from './screens';

const TabStack = createBottomTabNavigator();

const AuthNavigator = () => (
  <TabStack.Navigator
    initialRouteName="Home"
    tabBar={(props) => <TabBarView routes={props.state.routes} {...props} />}
  >
    <TabStack.Screen
      name={screens.app.home.name}
      component={screens.app.home.component}
      options={{ headerShown: false }}
    />
    <TabStack.Screen
      name={screens.app.sleep.name}
      component={screens.app.sleep.component}
      options={{ headerShown: false }}
    />
  </TabStack.Navigator>
);

export default AuthNavigator;
