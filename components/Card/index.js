//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { Image, TouchableOpacity, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { Text } from 'components/Text';

import colors from 'constants/colors';
import { scaleX, scaleY } from 'constants/size';

import styles from './styles';

type Props = {
  style?: ViewStyleProp,
};

const CardTopic = ({
  card,
  isLong,
  isActive,
  activeIconStyle,
  onPress,
  style,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.cardContainerStyle,
          style,
          {
            backgroundColor: card.color,
            height: isLong ? 210 : 170,
          },
          isActive && styles.cardContainerActiveStyle,
        ]}
      >
        <Image
          source={card.image}
          style={[
            styles.cardImageStyle,
            {
              height: isLong ? 122 : 98,
              marginBottom: 10,
            },
          ]}
          resizeMode="contain"
        />
        <Text
          size="sz18"
          weight="bold"
          style={[{ color: card.textColor }, styles.titleTextStyle]}
        >
          {card.title}
        </Text>
      </View>

      {isActive && (
        <Image
          source={require('assets/images/Auth/NewUserModal/Cards/Active.png')}
          style={[styles.activeIconStyle, activeIconStyle]}
        />
      )}
    </TouchableOpacity>
  );
};

const CardCourse = ({ card, onPress, style }) => (
  <View
    style={[
      styles.cardCourseContainerStyle,
      { backgroundColor: colors[card.backgroundColor] },
      style,
    ]}
  >
    <Image
      source={card.icon}
      style={styles.cardCourseImageStyle}
      resizeMode="contain"
    />

    <View style={styles.cardCourseHeaderContainerStyle}>
      <Text size="sz18" weight="heavy" color={card.fontColor}>
        {card.title}
      </Text>
      <Text
        size="sz11"
        weight="medium"
        color={card.fontColor}
        transform="uppercase"
      >
        {card.type}
      </Text>
    </View>

    <View style={styles.cardCourseFooterContainerStyle}>
      <Text
        size="sz11"
        weight="medium"
        transform="uppercase"
        color={card.fontColor}
      >
        {card.length}
      </Text>

      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.cardCourseButtonStyle,
          { backgroundColor: colors[card.fontColor] },
        ]}
      >
        <Text
          size="sz12"
          transform="uppercase"
          weight="medium"
          color={card.buttonFontColor}
        >
          start
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const CardMusic = ({ card, onPress, style }) => (
  <View
    style={[
      styles.cardMusicContainerStyle,
      { backgroundColor: colors[card.backgroundColor] },
      style,
    ]}
  >
    <Image source={card.icon} style={styles.cardMusicImageStyle} />
    <View style={styles.cardMusicHeaderContainerStyle}>
      <Text
        size="sz18"
        weight="heavy"
        color={card.fontColor}
        style={styles.cardMusicTitleContainerStyle}
      >
        {card.title}
      </Text>
      <Text
        size="sz11"
        weight="medium"
        color={card.fontColor}
        transform="uppercase"
      >
        {card.type} · {card.length}
      </Text>
    </View>

    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('assets/images/Controls/PlayButton.png')}
        style={styles.playButtonImageStyle}
      />
    </TouchableOpacity>
  </View>
);

const CardRecommended = ({ card, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.cardRecommendedContainerStyle, style]}
  >
    <Image
      source={card.image}
      style={[
        { backgroundColor: colors[card.backgroundColor] },
        styles.cardRecommendedImageStyle,
      ]}
      resizeMode="contain"
    />

    <Text
      size="sz18"
      weight="heavy"
      style={styles.cardRecommendedTitleContainerStyle}
    >
      {card.title}
    </Text>
    <Text size="sz11" weight="medium" transform="uppercase" color="gray">
      {card.type} · {card.length}
    </Text>
  </TouchableOpacity>
);

const CardMeditate = ({ card, isLong, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.cardCourseContainerStyle,
      {
        height: isLong ? 210 : 170,
        marginBottom: scaleY * 20,
      },
      style,
    ]}
  >
    <Image
      source={card.image}
      style={styles.cardMeditateImageStyle}
      resizeMode="cover"
    />
    <BlurView
      style={styles.cardMeditateHeaderContainerStyle}
      blurType="chromeMaterialLight"
      blurAmount={20}
      reducedTransparencyFallbackColor="white"
    >
      <Text size="sz18" weight="heavy" color="white">
        {card.title}
      </Text>
    </BlurView>
  </TouchableOpacity>
);

export { CardTopic, CardCourse, CardMusic, CardRecommended, CardMeditate };
