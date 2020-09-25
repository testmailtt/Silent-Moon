import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { selectUsername } from 'entities/user/state';

import { TabBarView } from 'components/TabBar';

import screens from './screens';

const AppStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

const TabNavigator = (props) => (
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
    <TabStack.Screen
      name={props.username || 'Profile'}
      component={screens.app.profile.component}
      options={{ headerShown: false }}
    />
  </TabStack.Navigator>
);

const AppNavigator = (props) => (
  <AppStack.Navigator>
    <AppStack.Screen name="Tabs" options={{ headerShown: false }}>
      {() => <TabNavigator username={props.username} />}
    </AppStack.Screen>
    <AppStack.Screen
      name={screens.app.course.key}
      component={screens.app.course.component}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);
const mapStateToProps = (state) => ({
  username: selectUsername(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
