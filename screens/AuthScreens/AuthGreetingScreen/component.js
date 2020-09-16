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

const AuthGreetingScreen = (props: Props) => (
  <ScreenLayout>
    <StatusBar hidden />
    <View style={styles.backgroundImageContainerStyle}>
      <Image
        source={require('assets/images/Auth/BackgroundImage.png')}
        style={styles.backgroundImageStyle}
        resizeMode="stretch"
      />
    </View>

    <Logo />

    <View style={styles.bodyContainerStyle}>
      <View style={styles.textContainerStyle}>
        <Text size="sz30" style={styles.titleContainerStyle}>
          We are what we do
        </Text>
        <Text size="sz16" weight="light" color="gray" align="center">
          Thousand of people are using silent moon for smalls meditation
        </Text>
      </View>

      <View>
        <Button
          title="sign up"
          onPress={() =>
            props.navigation.navigate(screens.auth.auth_signup.key)
          }
          style={styles.buttonContainerStyle}
        />
        <View style={styles.signInContainerStyle}>
          <Text
            size="sz14"
            color="gray"
            transform="uppercase"
            weight="medium"
            align="center"
          >
            ALREADY HAVE AN ACCOUNT?
          </Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate(screens.auth.auth_signin.key)
            }
          >
            <Text
              size="sz14"
              color="accent"
              transform="uppercase"
              weight="medium"
            >
              {' '}
              LOG IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ScreenLayout>
);

export default AuthGreetingScreen;
