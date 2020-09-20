//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { Image, TouchableOpacity, View } from 'react-native';

import { Text } from 'components/Text';

import styles from './styles';

type Props = {
  style?: ViewStyleProp,
};

export const CardTopic = ({
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
