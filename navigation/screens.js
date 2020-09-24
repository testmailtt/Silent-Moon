import AuthGreetingScreen from 'screens/AuthScreens/AuthGreetingScreen';
import AuthSignInScreen from 'screens/AuthScreens/AuthSignInScreen';
import AuthSignUpScreen from 'screens/AuthScreens/AuthSignUpScreen';

import WelcomeScreen from 'screens/AuthScreens/NewUserModalScreens/WelcomeScreen';
import TopicScreen from 'screens/AuthScreens/NewUserModalScreens/TopicScreen';
import RemindersScreen from 'screens/AuthScreens/NewUserModalScreens/RemindersScreen';

import HomeScreen from 'screens/HomeScreen';
import SleepScreen from 'screens/SleepScreen';
import MeditateScreen from 'screens/MeditateScreen';
import MusicScreen from 'screens/MusicScreen';

import CourseScreen from 'screens/CourseScreen';

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
  app: {
    home: {
      name: 'Home',
      key: 'HOME',
      component: HomeScreen,
    },
    sleep: {
      name: 'Sleep',
      key: 'SLEEP',
      component: SleepScreen,
    },
    course: {
      name: 'Course',
      key: 'COURSE',
      component: CourseScreen,
    },
    meditate: {
      name: 'Meditate',
      key: 'MEDITATE',
      component: MeditateScreen,
    },
    music: {
      name: 'Music',
      key: 'MUSIC',
      component: MusicScreen,
    },
  },
};
