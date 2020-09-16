//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { TouchableOpacity } from 'react-native';
import { Text } from 'components/Text';

import styles from './styles';

type Props = {
  title: string,
  onPress: () => void,
  style?: ViewStyleProp,
};

export const Button = ({ title, onPress, style }: Props) => (
  <TouchableOpacity
    style={[style, styles.buttonContainerStyle]}
    onPress={onPress}
  >
    <Text
      size="sz14"
      weight="medium"
      align="center"
      transform="uppercase"
      color="white"
    >
      {title}
    </Text>
  </TouchableOpacity>
);
