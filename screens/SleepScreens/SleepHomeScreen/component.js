//@flow
import React from 'react';
import { View, Image } from 'react-native';

import { Text } from 'components/Text';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import ScreenLayout from 'components/ScreenLayout';

import styles from './styles';

type Props = {};

const SleepHomeScreen = ({ navigation, route, ...props }: Props) => (
  <ScreenLayout style={styles.screenLayoutStyle}>
    <View />
  </ScreenLayout>
);

export default SleepHomeScreen;
