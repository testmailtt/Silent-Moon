//@flow
import React from 'react';

import { View } from 'react-native';
import { Text } from 'components/Text';
import ScreenLayout from 'components/ScreenLayout';

import styles from './styles';

type Props = {};

const SleepScreen = (props: Props) => {
  return (
    <ScreenLayout>
      <View style={{ flex: 1 }}>
        <Text size="sz14">aisdjoiasjdoiasjd</Text>
      </View>
    </ScreenLayout>
  );
};

export default SleepScreen;
