//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { Image } from 'react-native';

import styles from './styles';

type Props = {
  style?: ViewStyleProp,
};

export const Logo = ({ style }: Props) => (
  <Image
    source={require('assets/images/Logo.png')}
    style={[styles.logoImageStyle, style]}
    resizeMode="contain"
  />
);

export const LogoBlue = ({ style }: Props) => (
  <Image
    source={require('assets/images/LogoBlue.png')}
    style={[styles.logoImageStyle, style]}
    resizeMode="contain"
  />
);
