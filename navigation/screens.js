import AuthGreetingScreen from 'screens/AuthScreens/AuthGreetingScreen';
import AuthSignInScreen from 'screens/AuthScreens/AuthSignInScreen';
import AuthSignUpScreen from 'screens/AuthScreens/AuthSignUpScreen';

import WelcomeScreen from 'screens/AuthScreens/NewUserModalScreens/WelcomeScreen';
import TopicScreen from 'screens/AuthScreens/NewUserModalScreens/TopicScreen';
import RemindersScreen from 'screens/AuthScreens/NewUserModalScreens/RemindersScreen';

export default {
  auth: {
    auth_greeting: {
      key: '_AUTH_GREETING',
      component: AuthGreetingScreen,
    },
    auth_signin: {
      key: '_AUTH_SIGNIN',
      component: AuthSignInScreen,
    },
    auth_signup: {
      key: '_AUTH_SIGNUP',
      component: AuthSignUpScreen,
    },
    new_user_modal: {
      welcome: {
        key: 'WELCOME',
        component: WelcomeScreen,
      },
      topic: {
        key: 'TOPIC',
        component: TopicScreen,
      },
      reminders: {
        key: 'REMINDERS',
        component: RemindersScreen,
      },
    },
  },
};
