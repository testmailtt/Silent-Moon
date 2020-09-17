//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { TouchableOpacity, Image } from 'react-native';
import { Text } from 'components/Text';

import styles from './styles';

type Props = {
  title?: string,
  connectType?: string,
  onPress?: () => void,
  style?: ViewStyleProp,
  navigation?: any,
};

const connectImages = {
  facebook: require('assets/images/Auth/ConnectFacebook.png'),
  google: require('assets/images/Auth/ConnectGoogle.png'),
};

export const Button = ({ title, onPress, style }: Props) => (
  <TouchableOpacity
    style={[styles.buttonContainerStyle, style]}
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

export const ButtonWhite = ({ title, onPress, style }: Props) => (
  <TouchableOpacity
    style={[styles.buttonWhiteContainerStyle, style]}
    onPress={onPress}
  >
    <Text
      size="sz14"
      weight="medium"
      align="center"
      transform="uppercase"
      color="black"
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export const BackButton = ({ navigation, style }: Props) => (
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={[styles.backButtonContainerStyle, style]}
  >
    <Image
      source={require('assets/images/Controls/BackButton.png')}
      style={styles.backButtonImageStyle}
    />
  </TouchableOpacity>
);

export const ConnectButton = ({ connectType, style }: Props) => (
  <TouchableOpacity
    onPress={() => console.log('connected')}
    style={[styles.connectButtonContainerStyle, style]}
  >
    <Image
      source={connectImages[connectType]}
      style={styles.connectImageStyle}
      resizeMode="contain"
    />
  </TouchableOpacity>
);
