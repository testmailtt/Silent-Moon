//@flow
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Text } from 'components/Text';
import ScreenLayout from 'components/ScreenLayout';
import { Button, DateButton } from 'components/Button';

import styles from './styles';

type Props = {};

const RemindersScreen = ({
  time,
  dates,
  setAuth,
  chooseDates,
  chosenDates,
  onChange,
}: Props) => {
  return (
    <ScreenLayout>
      <View style={[styles.headerContainerStyle, styles.upperContainerStyle]}>
        <Text size="sz24" weight="bold" style={styles.headerTitleStyle}>
          What time would you like to meditate?
        </Text>
        <Text
          size="sz16"
          weight="light"
          color="gray"
          style={styles.headerSubtitleStyle}
        >
          Any time you can choose but We recommend first thing in th morning.
        </Text>
      </View>

      <View style={styles.timePickerContainerStyle}>
        <DateTimePicker
          mode="time"
          display="spinner"
          textColor="black"
          value={time}
          is24Hour={true}
          onChange={onChange}
          style={styles.timePickerStyle}
        />
      </View>

      <View style={styles.headerContainerStyle}>
        <Text size="sz24" weight="bold" style={styles.headerTitleStyle}>
          Which day would you like to meditate?
        </Text>
        <Text
          size="sz16"
          weight="light"
          color="gray"
          style={styles.headerSubtitleStyle}
        >
          Everyday is best, but we recommend picking at least five.
        </Text>
      </View>

      <View style={styles.dateContainerStyle}>
        {dates.map((date, index) => (
          <DateButton
            key={date}
            title={date}
            isActive={chosenDates.find((elem) => elem === date)}
            onPress={() => chooseDates(date)}
            style={index !== dates.length - 1 && styles.dateViewStyle}
          />
        ))}
      </View>

      <Button title="save" onPress={setAuth} style={styles.saveButtonStyle} />

      <TouchableOpacity onPress={setAuth}>
        <Text size="sz14" weight="medium" align="center" transform="uppercase">
          no thanks
        </Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
};

export default RemindersScreen;
