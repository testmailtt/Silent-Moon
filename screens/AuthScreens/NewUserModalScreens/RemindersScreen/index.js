/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { fetchAuthAsync } from 'entities/user/state';

import Component from './component';

const RemindersScreen = (props) => {
  const [chosenDates, setChosenDates] = useState([]);
  const [time, setTime] = useState(new Date());
  const dates = ['su', 'm', 't', 'w', 'th', 'f', 's'];

  const setAuth = () => {
    props.fetchAuth();
  };

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
      setAuth={setAuth}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchAuth: () => dispatch(fetchAuthAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemindersScreen);
