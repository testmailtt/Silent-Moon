//@flow
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import Slider from 'react-native-slider';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { BackButton, LikeButton, DownloadButton } from 'components/Button';
import { Text } from 'components/Text';
import ScreenLayout from 'components/ScreenLayout';

import styles from './styles';
import colors from '../../constants/colors';
import { useEffect } from 'react';

type Props = {};

const MusicScreen = ({ track, ...props }: Props) => {
  const [isMoveBackwardActive, setMoveBackwardActive] = useState(false);
  const [isMoveForwardActive, setMoveForwardActive] = useState(false);
  const [isPlayButtonActive, setPlayButtonActive] = useState(false);
  const [isPlayed, setPlay] = useState(false);
  const [timelineValue, setTimelineValue] = useState(0);

  const type = props.route.params && props.route.params.type;

  useEffect(() => {
    momentDurationFormatSetup(moment);
  });

  const movePlayback = (type) => {
    if (type === 'BACK' && timelineValue >= 0.25) {
      setTimelineValue(timelineValue - 0.25);
    } else if (type === 'FOR' && timelineValue < track.duration - 0.25) {
      setTimelineValue(timelineValue + 0.25);
    }
  };

  return (
    <ScreenLayout
      style={
        type === 'sleep'
          ? styles.screenLayoutSleepStyle
          : styles.screenLayoutStyle
      }
    >
      <Image
        source={
          type === 'sleep'
            ? require('assets/images/Music/MusicBackgroundSleep.png')
            : require('assets/images/Music/MusicBackground.png')
        }
        style={styles.imageBackgroundStyle}
        resizeMode="cover"
      />
      <View style={styles.headerButtonContainerStyle}>
        <BackButton
          navigation={props.navigation}
          type={type === 'sleep' && 'sleepPlayer'}
        />
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
            color={type === 'sleep' && 'sleep'}
            style={styles.titlePlayerStyle}
          >
            {track.title}
          </Text>
          <Text
            size="sz14"
            weight="medium"
            color="gray"
            transform="uppercase"
            align="center"
          >
            {track.from}
          </Text>
        </View>

        <View style={styles.controlContainerStyle}>
          <TouchableWithoutFeedback
            onPress={() => movePlayback('BACK')}
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
              {
                backgroundColor:
                  type === 'sleep'
                    ? isPlayButtonActive
                      ? colors.darkSleep
                      : colors.sleep
                    : isPlayButtonActive
                    ? colors.darkBlack
                    : colors.black,
              },
            ]}
          >
            <Image
              source={
                isPlayed
                  ? type === 'sleep'
                    ? require('assets/images/Controls/Player/PlaySleep.png')
                    : require('assets/images/Controls/Player/Play.png')
                  : type === 'sleep'
                  ? require('assets/images/Controls/Player/PauseSleep.png')
                  : require('assets/images/Controls/Player/Pause.png')
              }
              style={styles.playButtonImageStyle}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => movePlayback('FOR')}
            onPressIn={() => setMoveForwardActive(true)}
            onPressOut={() => setMoveForwardActive(false)}
          >
            <Image
              source={
                isMoveForwardActive
                  ? type === 'sleep'
                    ? require('assets/images/Controls/Player/MoveForwardActiveSleep.png')
                    : require('assets/images/Controls/Player/MoveForwardActive.png')
                  : type === 'sleep'
                  ? require('assets/images/Controls/Player/MoveForwardSleep.png')
                  : require('assets/images/Controls/Player/MoveForward.png')
              }
              style={styles.moveImageStyle}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.timelineContainerStyle}>
          <Slider
            style={styles.timelineStyle}
            thumbStyle={styles.thumbStyle}
            thumbTouchSize={styles.thumbTouchSizeStyle}
            thumbTintColor={type === 'sleep' ? colors.accent : colors.black}
            minimumValue={0}
            maximumValue={track.duration}
            step={0.1}
            value={timelineValue}
            onValueChange={(val) => setTimelineValue(val)}
            minimumTrackTintColor={
              type === 'sleep' ? colors.sleep : colors.black
            }
            maximumTrackTintColor={
              type === 'sleep' ? colors.sleepForeground : colors.grayPlayer
            }
          />
          <View style={styles.timeContainerStyle}>
            <Text
              size="sz16"
              weight="medium"
              color={type === 'sleep' && 'sleep'}
            >
              {moment
                .duration(timelineValue.toFixed(2), 'm')
                .format('mm:ss', { trim: false })}
            </Text>
            <Text
              size="sz16"
              weight="medium"
              color={type === 'sleep' && 'sleep'}
            >
              {moment
                .duration(track.duration, 'm')
                .format('mm:ss', { trim: false })}
            </Text>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default MusicScreen;
