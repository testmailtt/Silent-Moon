import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBarView } from 'components/TabBar';

import screens from './screens';

const AppStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

const TabNavigator = () => (
  <TabStack.Navigator
    initialRouteName="Home"
    tabBar={(props) => <TabBarView routes={props.state.routes} {...props} />}
  >
    <TabStack.Screen
      name={screens.app.home.name}
      component={screens.app.home.component}
      options={{ headerShown: false }}
      initialParams={{ course: screens.app.course.key }}
    />
    <TabStack.Screen
      name={screens.app.sleep.name}
      component={screens.app.sleep.component}
      options={{ headerShown: false }}
    />
    <TabStack.Screen
      name={screens.app.meditate.name}
      component={screens.app.meditate.component}
      options={{ headerShown: false }}
    />
  </TabStack.Navigator>
);

const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Tabs"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name={screens.app.course.key}
      component={screens.app.course.component}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default AppNavigator;
