/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { cardsColor } from 'constants/colors';

import Component from './component';

const TopicScreen = (props) => {
  const [topicCards, setTopicCards] = useState([
    {
      title: 'Reduce stress',
      image: require('assets/images/Auth/NewUserModal/Cards/Stress.png'),
      color: cardsColor.stress,
      textColor: cardsColor.text.stress,
    },
    // {
    //   title: 'Improve Performance',
    //   image: require('assets/images/Auth/NewUserModal/Cards/Performance.png'),
    //   color: cardsColor.performance,
    //   textColor: cardsColor.text.performance,
    // },
  ]);

  return <Component topicCards={topicCards} {...props} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TopicScreen);
