//@flow
import React from 'react';

import { Image, View, StatusBar } from 'react-native';

import { Text } from 'components/Text';
import ScreenLayout from 'components/ScreenLayout';
import { ButtonWhite } from 'components/Button';
import { LogoBlue } from 'components/Logo';

import styles from './styles';

type Props = {};

const WelcomeScreen = (props: Props) => (
  <ScreenLayout style={styles.backgroundContainerStyle}>
    <StatusBar hidden />

    <LogoBlue />

    <View style={styles.greetingContainerStyle}>
      <Text
        size="sz30"
        weight="heavy"
        color="primaryForeground"
        style={styles.welcomeTextStyle}
      >
        Hi {props.username}, Welcome
      </Text>
      <Text size="sz30" color="primaryForeground" align="center">
        to Silent Moon
      </Text>
    </View>

    <Text
      size="sz16"
      weight="light"
      color="primaryForeground"
      align="center"
      style={styles.subtitleStyle}
    >
      Explore the app, Find some peace of mind to prepare for meditation.
    </Text>

    <Image
      source={require('assets/images/Auth/NewUserModal/WelcomeBackground.png')}
      style={styles.backgroundImageStyle}
      resizeMode="contain"
    />

    <ButtonWhite
      title="get started"
      onPress={() => console.log('navigate next')}
      style={styles.buttonNextStyle}
    />
  </ScreenLayout>
);

export default WelcomeScreen;
