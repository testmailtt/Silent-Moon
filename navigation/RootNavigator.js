import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import { selectIsAuth } from 'entities/user/state';

import screens from './screens';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const RootStack = createStackNavigator();

const RootNavigator = (props) => (
  <RootStack.Navigator mode="modal" screenOptions={{ gestureEnabled: false }}>
    {props.isAuth ? (
      <>
        <RootStack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={screens.app.player.name}
          component={screens.app.player.component}
          options={{ headerShown: false }}
        />
      </>
    ) : (
      <>
        <RootStack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={screens.auth.new_user_modal.welcome.key}
          component={screens.auth.new_user_modal.welcome.component}
          options={{
            headerShown: false,
          }}
          initialParams={{ topic: screens.auth.new_user_modal.topic.key }}
        />
        <RootStack.Screen
          name={screens.auth.new_user_modal.topic.key}
          component={screens.auth.new_user_modal.topic.component}
          options={{ headerShown: false }}
          initialParams={{
            reminders: screens.auth.new_user_modal.reminders.key,
          }}
        />
        <RootStack.Screen
          name={screens.auth.new_user_modal.reminders.key}
          component={screens.auth.new_user_modal.reminders.component}
          options={{ headerShown: false }}
        />
      </>
    )}
  </RootStack.Navigator>
);

const mapStateToProps = (state) => ({
  isAuth: selectIsAuth(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
