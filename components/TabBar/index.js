import React from 'react';
import { TouchableHighlight, View, Image } from 'react-native';

import screens from 'navigation/screens';

import { Text } from 'components/Text';

import styles from './styles';
import { useState } from 'react';

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
    case 'Meditate':
      icon = isFocused
        ? require('assets/images/Tab/Active/Meditate.png')
        : require('assets/images/Tab/Inactive/Meditate.png');
      break;
    case 'Music':
      icon = isFocused
        ? require('assets/images/Tab/Active/Music.png')
        : require('assets/images/Tab/Inactive/Music.png');
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

const ModalMusic = ({ navigation }) => (
  <TouchableHighlight
    style={[styles.tabBarButtonContainerStyle]}
    onPress={() => navigation.navigate(screens.app.music.name)}
    underlayColor="transparent"
  >
    <>
      <View style={styles.tabBarIconContainerStyle}>
        <TabBarIcon routeName={'Music'} />
      </View>
      <Text size="sz14" weight="medium" color="gray">
        {screens.app.music.name}
      </Text>
    </>
  </TouchableHighlight>
);

export const TabBarView = ({ state, descriptors, navigation }) => {
  let routes = state.routes;

  const focusedOptions = descriptors[routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabBarContainerStyle}>
      {routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (route.name !== screens.app.music.name) {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          } else {
            navigation.navigate(screens.app.music.name);
          }
        };

        return (
          <TouchableHighlight
            key={route.name}
            style={[
              styles.tabBarButtonContainerStyle,
              index !== routes.length - 1 && styles.tabBarSpaceBetweenStyle,
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
      <ModalMusic navigation={navigation} />
    </View>
  );
};
