//@flow
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { Text } from 'components/Text';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import ScreenLayout from 'components/ScreenLayout';

import styles from './styles';

type Props = {};

const AuthGreetingScreen = ({ navigation, route, ...props }: Props) => (
  <ScreenLayout>
    <Image
      source={require('assets/images/Auth/BackgroundImage.png')}
      style={styles.backgroundImageStyle}
      resizeMode="cover"
    />

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
          onPress={() => navigation.navigate(route.params.auth_signup)}
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
            onPress={() => navigation.navigate(route.params.auth_signin)}
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
