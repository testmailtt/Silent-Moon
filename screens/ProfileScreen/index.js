/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchAuthAsync } from 'entities/user/state';

import Component from './component';

const ProfileScreen = (props) => {
  const [avatar] = useState(require('assets/images/Profile/avatar.gif'));

  return <Component onLogout={props.fetchAuth} avatar={avatar} {...props} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchAuth: (flag) => dispatch(fetchAuthAsync(flag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
