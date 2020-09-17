/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Component from './component';

const WelcomeScreen = (props) => {
  const [username, setUsername] = useState('Antony');
  return <Component username={username} {...props} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
