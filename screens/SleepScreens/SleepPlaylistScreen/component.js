//@flow
import React from 'react';
import { ScrollView, View } from 'react-native';

import { Text } from 'components/Text';
import ScreenLayout from 'components/ScreenLayout';
import { BackButton } from 'components/Button';
import { CardRecommended } from 'components/Card';

import styles from './styles';

type Props = {};

const SleepPlaylistScreen = ({
  navigation,
  cardsRecommended,
  navigateToPlayer,
  ...props
}: Props) => (
  <ScreenLayout style={styles.screenLayoutStyle}>
    <View style={styles.buttonsContainerStyle}>
      <BackButton navigation={navigation} type="sleep" />
      <Text
        size="sz24"
        weight="heavy"
        color="sleep"
        style={styles.headerTitleStyle}
      >
        Sleep Music
      </Text>
    </View>
    <ScrollView contentContainerStyle={styles.cardSleepRecommendedStyle}>
      {cardsRecommended.map((item, index) => (
        <CardRecommended
          key={item.title + index}
          card={item}
          color={'white'}
          onPress={navigateToPlayer}
          style={
            (index !== cardsRecommended.length % 2) !== 0 &&
            styles.cardSpaceStyle
          }
        />
      ))}
    </ScrollView>
  </ScreenLayout>
);

export default SleepPlaylistScreen;
