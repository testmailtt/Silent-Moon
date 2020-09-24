//@flow
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Slider from '@react-native-community/slider';

import { BackButton, LikeButton, DownloadButton } from 'components/Button';
import { Text } from 'components/Text';
import ScreenLayout from 'components/ScreenLayout';

import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../../constants/colors';

type Props = {};

const MusicScreen = (props: Props) => {
  const [isMoveBackwardActive, setMoveBackwardActive] = useState(false);
  const [isMoveForwardActive, setMoveForwardActive] = useState(false);
  const [isPlayButtonActive, setPlayButtonActive] = useState(false);
  const [isPlayed, setPlay] = useState(false);
  const [timelineValue, setTimelineValue] = useState({ value: 0 });

  return (
    <ScreenLayout style={styles.screenLayoutStyle}>
      <Image
        source={require('assets/images/Music/MusicBackground.png')}
        style={styles.imageBackgroundStyle}
        resizeMode="cover"
      />
      <View style={styles.headerButtonContainerStyle}>
        <BackButton navigation={props.navigation} />
        <View style={styles.innerHeaderContainerStyle}>
          <LikeButton style={styles.spaceBetweenStyle} />
          <DownloadButton style={styles.downloadButtonStyle} />
        </View>
      </View>
      <View style={styles.variableContainerStyle}>
        <View style={styles.titlePlayerContainerStyle}>
          <Text
            size="sz34"
            weight="heavy"
            align="center"
            style={styles.titlePlayerStyle}
          >
            Focus Attention
          </Text>
          <Text
            size="sz14"
            weight="medium"
            color="gray"
            transform="uppercase"
            align="center"
          >
            7 days of calm
          </Text>
        </View>

        <View>
          <View style={styles.controlContainerStyle}>
            <TouchableWithoutFeedback
              onPressIn={() => setMoveBackwardActive(true)}
              onPressOut={() => setMoveBackwardActive(false)}
            >
              <Image
                source={
                  isMoveBackwardActive
                    ? require('assets/images/Controls/Player/MoveBackwardActive.png')
                    : require('assets/images/Controls/Player/MoveBackward.png')
                }
                style={styles.moveImageStyle}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPressIn={() => setPlayButtonActive(true)}
              onPressOut={() => {
                setPlayButtonActive(false);
                setPlay(!isPlayed);
              }}
              style={[
                styles.playButtonStyle,
                isPlayButtonActive && styles.playButtonActiveStyle,
              ]}
            >
              <Image
                source={
                  isPlayed
                    ? require('assets/images/Controls/Player/Play.png')
                    : require('assets/images/Controls/Player/Pause.png')
                }
                style={styles.playButtonImageStyle}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPressIn={() => setMoveForwardActive(true)}
              onPressOut={() => setMoveForwardActive(false)}
            >
              <Image
                source={
                  isMoveForwardActive
                    ? require('assets/images/Controls/Player/MoveForwardActive.png')
                    : require('assets/images/Controls/Player/MoveForward.png')
                }
                style={styles.moveImageStyle}
              />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.timelineContainerStyle}>
            <Slider
              style={{ width: 200, height: 2 }}
              minimumValue={0}
              maximumValue={45}
              step={0.1}
              value={timelineValue.value}
              onSlidingComplete={(val) => setTimelineValue(val)}
              minimumTrackTintColor={colors.black}
              maximumTrackTintColor={colors.grayPlayer}
            />
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default MusicScreen;
