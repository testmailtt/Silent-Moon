//@flow
import React from 'react';
import _ from 'lodash';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Text } from 'components/Text';
import ScreenLayout from 'components/ScreenLayout';
import { Button, DateButton } from 'components/Button';

import styles from './styles';

type Props = {};

const RemindersScreen = ({
  time,
  dates,
  chooseDates,
  chosenDates,
  onChange,
}: Props) => {
  return (
    <ScreenLayout>
      <StatusBar hidden />

      <View style={[styles.headerContainerStyle, styles.upperContainerStyle]}>
        <Text size="sz24" weight="bold" style={styles.headerTitleStyle}>
          What time would you like to meditate?
        </Text>
        <Text size="sz16" weight="light" color="gray">
          Any time you can choose but We recommend first thing in th morning.
        </Text>
      </View>

      <View style={styles.timePickerContainerStyle}>
        <DateTimePicker
          mode="time"
          display="spinner"
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
        <Text size="sz16" weight="light" color="gray">
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

      <Button
        title="save"
        onPress={() => console.log('saved')}
        style={styles.saveButtonStyle}
      />

      <TouchableOpacity>
        <Text size="sz14" weight="medium" align="center" transform="uppercase">
          no thanks
        </Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
};

export default RemindersScreen;
