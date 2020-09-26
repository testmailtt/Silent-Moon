//@flow
import React from 'react';
import { View, Image } from 'react-native';

import { Text } from 'components/Text';
import { Button } from 'components/Button';
import ScreenLayout from 'components/ScreenLayout';

import styles from './styles';

type Props = {};

const SleepGreetingScreen = ({ goNextScreen, ...props }: Props) => (
  <ScreenLayout style={styles.screenLayoutStyle}>
    <Image
      source={require('assets/images/Sleep/BackgroundImage.png')}
      style={styles.backgroundImageStyle}
      resizeMode="cover"
    />
    <View style={styles.headerContainerStyle}>
      <Text
        size="sz30"
        weight="heavy"
        color="white"
        align="center"
        style={styles.headerTitleStyle}
      >
        Welcome to Sleep
      </Text>
      <Text size="sz16" weight="light" align="center" color="white">
        Explore the new king of sleep. It uses sound and visualization to create
        perfect conditions for refreshing sleep.
      </Text>
    </View>

    <Button
      title="GET STARTED"
      style={styles.buttonStyle}
      onPress={goNextScreen}
    />
  </ScreenLayout>
);

export default SleepGreetingScreen;
