//@flow
import React, { type Node } from 'react';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { View, TextInput } from 'react-native';

import colors from 'constants/colors';

import styles from './styles';

type Props = {
  style?: ViewStyleProp,
};

export const Input = ({
  name,
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  style,
  placeholder,
  errors,
  touched,
  ...props
}: Props) => (
  <View style={style}>
    <TextInput
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      value={values[name]}
      placeholder={placeholder}
      placeholderTextColor={colors.gray}
      style={[
        styles.inputStyle,
        errors[name] && touched[name] && styles.errorTextStyle,
      ]}
      {...props}
    />
  </View>
);
