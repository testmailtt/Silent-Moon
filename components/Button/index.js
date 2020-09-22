//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import {
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View,
} from 'react-native';

import colors from 'constants/colors';
import { Text } from 'components/Text';

import { TouchableNativeFeedback } from 'react-native-gesture-handler';

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
      resizeMode="contain"
    />
  </TouchableOpacity>
);

export const LikeButton = ({ onPress, style }: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.backButtonContainerStyle, style]}
  >
    <Image
      source={require('assets/images/Controls/Like.png')}
      style={styles.backButtonImageStyle}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

export const DownloadButton = ({ onPress, style }: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.backButtonContainerStyle, style]}
  >
    <Image
      source={require('assets/images/Controls/Download.png')}
      style={styles.backButtonImageStyle}
      resizeMode="contain"
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

export const DateButton = ({ title, onPress, isActive, style }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={colors.secondaryForeground}
    style={[
      style,
      styles.dateContainerStyle,
      isActive && styles.dateContainerActiveStyle,
    ]}
  >
    <Text
      size="sz14"
      weight="medium"
      color={isActive ? 'white' : 'gray'}
      transform="uppercase"
      align="center"
    >
      {title}
    </Text>
  </TouchableHighlight>
);

export const FilterButton = ({ title, icon, onPress, isActive, style }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={[style, styles.filterButtonContainerStyle]}>
      <View
        style={[
          styles.filterIconContainerStyle,
          isActive && styles.filterIconContainerActiveStyle,
        ]}
      >
        <Image
          source={icon}
          style={styles.filterIconStyle}
          resizeMode="center"
        />
      </View>
      <Text
        size="sz16"
        weight="medium"
        align="center"
        color={isActive ? 'black' : 'gray'}
      >
        {title}
      </Text>
    </View>
  </TouchableNativeFeedback>
);
