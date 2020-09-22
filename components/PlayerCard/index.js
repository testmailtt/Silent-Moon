//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { Image, TouchableOpacity, View } from 'react-native';

import { Text } from 'components/Text';

import styles from './styles';

type Props = {
  style?: ViewStyleProp,
};

export const PlayerCard = (props: Props) => (
  <View style={styles.playerCardContainerStyle}>
    <TouchableOpacity>
      <Image
        source={require('assets/images/Controls/PlayButtonActive.png')}
        style={styles.buttonImageStyle}
        resizeMode="contain"
      />
    </TouchableOpacity>
    <View>
      <Text size="sz16" weight="medium" style={styles.titleStyle}>
        {props.title}
      </Text>
      <Text size="sz11" weight="medium" color="gray" transform="uppercase">
        {props.length} MIN
      </Text>
    </View>
  </View>
);
