//@flow
import React from 'react';
import { View, StatusBar, Image, TouchableOpacity } from 'react-native';

import { Text } from 'components/Text';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import ScreenLayout from 'components/ScreenLayout';

import screens from 'navigation/screens';

import styles from './styles';

type Props = {};

const AuthSignInScreen = (props: Props) => (
  <ScreenLayout>
    <StatusBar hidden />
  </ScreenLayout>
);

export default AuthSignInScreen;
