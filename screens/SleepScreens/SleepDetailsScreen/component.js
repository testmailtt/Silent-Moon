//@flow
import React from 'react';
import { Image, View } from 'react-native';

import { BackButton, LikeButton, DownloadButton } from 'components/Button';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import ScreenLayout from 'components/ScreenLayout';

import { CardRecommended } from 'components/Card';

import styles from './styles';

type Props = {};

const SleepDetailsScreen = ({
  card,
  activeTab,
  setActiveTab,
  navigation,
  cardsRecommended,
  ...props
}: Props) => {
  return (
    <ScreenLayout style={styles.screenLayoutStyle}>
      <Image
        source={card.cover}
        style={styles.imageCoverStyle}
        resizeMode="cover"
      />

      <View style={styles.buttonsContainerStyle}>
        <BackButton navigation={navigation} />
        <View style={{ flexDirection: 'row' }}>
          <LikeButton style={styles.likeButtonStyle} />
          <DownloadButton />
        </View>
      </View>

      <View style={styles.screenLayoutContainerStyle}>
        <View style={styles.headerContainerStyle}>
          <Text
            size="sz34"
            weight="heavy"
            color="sleep"
            style={styles.headerTitleStyle}
          >
            {card.title}
          </Text>
          <Text
            size="sz14"
            weight="medium"
            color="gray"
            transform="uppercase"
            style={styles.headerTypeStyle}
          >
            {card.length} · {card.type}
          </Text>
          <Text size="sz16" weight="light" color="gray">
            {card.description}
          </Text>
        </View>

        <View style={styles.infoWrapperStyle}>
          <View
            style={[styles.infoContainerStyle, styles.spaceBetweenInfoStyle]}
          >
            <Image
              source={require('assets/images/Sleep/Like.png')}
              style={styles.iconStyle}
              resizeMode="contain"
            />
            <Text size="sz14" weight="medium" color="gray">
              {card.favoritesCount} Favorites
            </Text>
          </View>
          <View style={styles.infoContainerStyle}>
            <Image
              source={require('assets/images/Sleep/Listening.png')}
              style={styles.iconStyle}
              resizeMode="contain"
            />
            <Text size="sz14" weight="medium" color="gray">
              {card.listeningCount} Listening
            </Text>
          </View>
        </View>
        <View style={styles.dividerStyle} />
        <View>
          <Text
            size="sz24"
            weight="medium"
            color="sleep"
            style={styles.relatedStyle}
          >
            Related
          </Text>
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
          <Button title="Play" />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default SleepDetailsScreen;
