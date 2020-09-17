//@flow
import React from 'react';

import { View, ScrollView, Image, StatusBar } from 'react-native';

import { scaleX } from 'constants/size';

import { Text } from 'components/Text';
import { CardTopic } from 'components/Card';
import ScreenLayout from 'components/ScreenLayout';

import styles from './styles';

type Props = {};

const TopicScreen = ({ topicCards }: Props) => (
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
    <Text size="sz20" weight="light" color="gray" style={styles.subtitleStyle}>
      choose a topic to focus on:
    </Text>

    <Image
      source={require('assets/images/Auth/NewUserModal/TopicBackground.png')}
      style={styles.backgroundImageStyle}
      resizeMode="stretch"
    />

    <ScrollView style={styles.scrollViewStyle}>
      {topicCards.map((card, index) => {
        const displayFlag = index % 2 === 0;
        return (
          <CardTopic
            key={card.title}
            card={card}
            isLong={displayFlag}
            style={{
              marginLeft: displayFlag ? scaleX * 0 : 0,
              marginRight: !displayFlag ? scaleX * 0 : 0,
            }}
          />
        );
      })}
    </ScrollView>
  </ScreenLayout>
);

export default TopicScreen;
