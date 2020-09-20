//@flow
import React from 'react';
import _ from 'lodash';
import { View, ScrollView, Image, StatusBar } from 'react-native';

import { Text } from 'components/Text';
import { CardTopic } from 'components/Card';
import ScreenLayout from 'components/ScreenLayout';
import { Button } from 'components/Button';

import { scaleY } from 'constants/size';

import styles from './styles';

type Props = {};

let cardCurrentIndex = 0;

const TopicScreen = ({
  navigation,
  topicCards,
  route,
  chosenTopic,
  chooseTopic,
}: Props) => {
  const renderCards = (card, index) => {
    cardCurrentIndex = index % 4 === 0 ? 0 : cardCurrentIndex;
    const displayFlag = cardCurrentIndex % 1.5 === 0;

    cardCurrentIndex++;
    return (
      <CardTopic
        key={card.title}
        card={card}
        isLong={displayFlag}
        isActive={chosenTopic.find((item) => item === card.title)}
        onPress={() => chooseTopic(card.title)}
        style={[
          cardCurrentIndex - 1 !== 0 && displayFlag && styles.viewBalanceStyle,
        ]}
        activeIconStyle={
          cardCurrentIndex - 1 !== 0 && displayFlag && { top: scaleY * 10 - 40 }
        }
      />
    );
  };

  return (
    <ScreenLayout>
      <StatusBar hidden />

      <View style={styles.titleContainerStyle}>
        <Text size="sz28" weight="heavy">
          What Brings you
        </Text>
        <Text size="sz28" weight="ultraLight">
          to Silent Moon?
        </Text>
      </View>
      <Text
        size="sz20"
        weight="light"
        color="gray"
        style={styles.subtitleStyle}
      >
        choose a topic to focus on:
      </Text>

      <Image
        source={require('assets/images/Auth/NewUserModal/TopicBackground.png')}
        style={styles.backgroundImageStyle}
        resizeMode="stretch"
      />

      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.innerViewStyle}>
          {topicCards.map((card, index) => renderCards(card, index))}
        </View>
      </ScrollView>

      {!_.isEmpty(chosenTopic) && (
        <View style={styles.buttonNextContainerStyle}>
          <Button
            title="Next"
            onPress={() => navigation.navigate(route.params.reminders)}
            style={styles.buttonNextStyle}
          />
        </View>
      )}
    </ScreenLayout>
  );
};

export default TopicScreen;
