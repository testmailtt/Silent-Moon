//@flow
import React from 'react';
import { ScrollView, View } from 'react-native';

import { Text } from 'components/Text';
import { Logo } from 'components/Logo';
import { ScreenLayoutScroll } from 'components/ScreenLayout';
import { CardCourse, CardMusic, CardRecommended } from 'components/Card';

import styles from './styles';

type Props = {};

const HomeScreen = ({ navigation, route, ...props }: Props) => {
  return (
    <ScreenLayoutScroll style={styles.scrollViewContainerStyle}>
      <Logo />

      <View style={styles.headerContainerStyle}>
        <Text size="sz28" weight="heavy" style={styles.headerTitleStyle}>
          Good Morning, Antony
        </Text>
        <Text size="sz20" weight="light" color="gray">
          We Wish you have a good day
        </Text>
      </View>

      <View style={styles.cardContainerStyle}>
        {props.cards.map(
          (item, index) =>
            index !== props.cards.length - 1 && (
              <CardCourse
                key={item.title}
                card={item}
                onPress={() => navigation.navigate(route.params.course)}
              />
            )
        )}
        <CardMusic
          card={props.cards[props.cards.length - 1]}
          style={styles.cardMusicContainerStyle}
        />
      </View>

      <Text size="sz24" weight="medium" style={styles.blockTitleStyle}>
        Recommended for you
      </Text>

      <ScrollView horizontal style={styles.scrollViewHorizontalContainerStyle}>
        {props.cardsRecommended.map((item, index) => (
          <CardRecommended
            key={item.title}
            card={item}
            style={index !== props.cards.length - 1 && styles.cardSpaceStyle}
          />
        ))}
      </ScrollView>
    </ScreenLayoutScroll>
  );
};

export default HomeScreen;
