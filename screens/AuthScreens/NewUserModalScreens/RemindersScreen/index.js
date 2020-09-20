/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { connect } from 'react-redux';

import Component from './component';

const RemindersScreen = (props) => {
  const [chosenDates, setChosenDates] = useState([]);
  const [time, setTime] = useState(new Date());
  const dates = ['su', 'm', 't', 'w', 'th', 'f', 's'];

  const onChange = (event, selectedTime) => {
    const currentDate = selectedTime || time;
    setTime(currentDate);
  };

  const chooseDates = (date) => {
    if (!chosenDates.find((elem) => elem === date)) {
      setChosenDates(chosenDates.concat(date));
    } else {
      setChosenDates(_.remove(chosenDates, (item) => item !== date));
    }
  };

  return (
    <Component
      time={time}
      chosenDates={chosenDates}
      chooseDates={chooseDates}
      dates={dates}
      onChange={onChange}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RemindersScreen);
