//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { SafeAreaView, View } from 'react-native';

import styles from './styles';

type Props = {
  style?: ViewStyleProp,
  children: Node,
};

const ScreenLayout = ({ style, children }: Props) => (
  <View style={[style, styles.ScreenLayoutStyle]}>{children}</View>
);

export const ScreenLayoutSafe = ({ style, children }: Props) => (
  <SafeAreaView style={style}>{children}</SafeAreaView>
);

export default ScreenLayout;
