/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { fetchNewUserAsync } from 'entities/user/state';
import Component from './component';

const SleepGreetingScreen = (props) => {
  const goNextScreen = () => {
    props.fetchNewUser(false);
  };

  return <Component goNextScreen={goNextScreen} {...props} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchNewUser: (flag) => dispatch(fetchNewUserAsync(flag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SleepGreetingScreen);
