//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { SafeAreaView, ScrollView, View } from 'react-native';

import styles from './styles';

type Props = {
  style?: ViewStyleProp,
  children: Node,
};

const ScreenLayout = ({ style, children }: Props) => (
  <View style={[styles.ScreenLayoutStyle, style]}>{children}</View>
);

export const ScreenLayoutScroll = ({ style, children }: Props) => (
  <ScrollView style={[styles.ScreenLayoutStyle, style]}>{children}</ScrollView>
);

export const ScreenLayoutSafe = ({ style, children }: Props) => (
  <SafeAreaView style={style}>{children}</SafeAreaView>
);

export default ScreenLayout;
