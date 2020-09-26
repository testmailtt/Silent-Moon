//@flow
import React from 'react';
import { View, Image, ScrollView } from 'react-native';

import { Text } from 'components/Text';
import { FilterButton } from 'components/Button';
import ScreenLayout from 'components/ScreenLayout';
import { CardSleep, CardRecommended } from 'components/Card';

import styles from './styles';

type Props = {};

const SleepHomeScreen = ({
  filters,
  cardOfDay,
  filterActive,
  setActiveFilter,
  cardsRecommended,
  ...props
}: Props) => {
  return (
    <ScreenLayout style={styles.screenLayoutStyle}>
      <Image
        source={require('assets/images/Sleep/BackgroundHome.png')}
        style={styles.backgroundImageStyle}
        resizeMode="cover"
      />
      <View style={styles.headerContainerStyle}>
        <Text
          size="sz28"
          weight="heavy"
          align="center"
          color="sleep"
          style={styles.headerTitleStyle}
        >
          Sleep Stories
        </Text>
        <Text
          size="sz16"
          weight="light"
          align="center"
          color="sleep"
          style={styles.headerTitleStyle}
        >
          Soothing bedtime stories to help you fall into a deep and natural
          sleep
        </Text>
      </View>
      <ScrollView horizontal style={styles.horizontalScrollViewContainerStyle}>
        {filters.map((item, index) => (
          <FilterButton
            title={item.title}
            icon={item.icon}
            isActive={index === filterActive}
            key={item.title}
            style={index !== filters.length - 1 && styles.filterSpaceStyle}
            color="white"
            onPress={() => setActiveFilter(index)}
          />
        ))}
      </ScrollView>
      <ScrollView>
        <CardSleep
          card={cardOfDay}
          onPress={props.navigateToPlaylist}
          style={styles.cardSleepContainerStyle}
        />
        <View style={styles.cardSleepRecommendedStyle}>
          {cardsRecommended.map((item, index) => (
            <CardRecommended
              key={item.title}
              card={item}
              color={'white'}
              onPress={props.navigateToDetails}
              style={
                (index !== cardsRecommended.length % 2) !== 0 &&
                styles.cardSpaceStyle
              }
            />
          ))}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default SleepHomeScreen;
