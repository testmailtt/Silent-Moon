import React from 'react';
import { TouchableHighlight, View, Image } from 'react-native';

import { Text } from 'components/Text';

import styles from './styles';

const TabBarIcon = ({ routeName, isFocused }) => {
  let icon;

  switch (routeName) {
    case 'Home':
      icon = isFocused
        ? require('assets/images/Tab/Active/Home.png')
        : require('assets/images/Tab/Inactive/Home.png');
      break;
    case 'Sleep':
      icon = isFocused
        ? require('assets/images/Tab/Active/Sleep.png')
        : require('assets/images/Tab/Inactive/Sleep.png');
      break;
    default:
      break;
  }

  return (
    <Image
      source={icon}
      style={
        isFocused
          ? styles.tabBarActiveIconStyle
          : styles.tabBarInactiveIconStyle
      }
      resizeMode="contain"
    />
  );
};

export const TabBarView = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabBarContainerStyle}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableHighlight
            key={route.name}
            style={[
              styles.tabBarButtonContainerStyle,
              index !== state.routes.length - 1 &&
                styles.tabBarSpaceBetweenStyle,
            ]}
            onPress={onPress}
            underlayColor="transparent"
          >
            <>
              <View style={styles.tabBarIconContainerStyle}>
                <TabBarIcon routeName={route.name} isFocused={isFocused} />
              </View>
              <Text
                size="sz14"
                weight="medium"
                color={isFocused ? 'accent' : 'gray'}
              >
                {route.name}
              </Text>
            </>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};
