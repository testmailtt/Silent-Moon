/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Component from './component';

const MusicScreen = (props) => {
  const [track] = useState({
    title: 'Focus Attention',
    from: '7 days of calm',
    duration: 45,
  });
  return <Component track={track} {...props} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MusicScreen);
