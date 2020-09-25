//@flow
import React from 'react';
import { View, Image } from 'react-native';

import ScreenLayout from 'components/ScreenLayout';

import styles from './styles';

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <ScreenLayout style={styles.screenLayoutStyle}>
      <View />
    </ScreenLayout>
  );
};

export default ProfileScreen;
