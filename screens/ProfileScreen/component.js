//@flow
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { Text } from 'components/Text';
import ScreenLayout from 'components/ScreenLayout';

import styles from './styles';

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <ScreenLayout style={styles.screenLayoutStyle}>
      <Image
        source={require('assets/images/Auth/BackgroundLines.png')}
        style={styles.backgroundLinesStyle}
      />

      <Image
        source={props.avatar}
        style={styles.avatarImageStyle}
        resizeMode="cover"
      />

      <Text
        size="sz24"
        weight="medium"
        align="center"
        style={styles.usernameStyle}
      >
        Antony Fomichev
      </Text>
      <Text
        size="sz14"
        weight="medium"
        color="gray"
        align="center"
        style={styles.emailStyle}
      >
        antony-fomichev@yandex.ru
      </Text>

      <TouchableOpacity onPress={() => props.onLogout(false)}>
        <Text
          size="sz14"
          weight="medium"
          color="red"
          align="center"
          transform="uppercase"
        >
          logout
        </Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
};

export default ProfileScreen;
