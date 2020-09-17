//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { Image, TouchableOpacity, View } from 'react-native';

import { scaleY } from 'constants/size';
import { Text } from 'components/Text';

import styles from './styles';

type Props = {
  style?: ViewStyleProp,
};

export const CardTopic = ({ card, isLong, style }: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          {
            backgroundColor: card.color,
            height: !isLong && scaleY * 167,
          },
          styles.cardContainerStyle,
          style,
        ]}
      >
        <Image
          source={card.image}
          style={styles.cardImageStyle}
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
    </TouchableOpacity>
  );
};
