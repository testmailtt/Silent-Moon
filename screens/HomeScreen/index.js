/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Component from './component';

const HomeScreen = (props) => {
  const [cards] = useState([
    {
      title: 'Basics',
      type: 'Course',
      length: '3-10 min',
      icon: require('assets/images/CardCourse/Basics.png'),
      backgroundColor: 'accent',
      fontColor: 'secondaryForeground',
      buttonFontColor: 'black',
      imageWidth: 120,
      imageHeight: 105,
    },
    {
      title: 'Relaxation',
      type: 'MUSIC',
      length: '3-10 min',
      icon: require('assets/images/CardCourse/Relaxation.png'),
      backgroundColor: 'lightSalmon',
      fontColor: 'black',
      buttonFontColor: 'white',
      imageWidth: 200,
      imageHeight: 200,
    },
    {
      title: 'Daily Thought',
      type: 'meditation',
      length: '3-10 min',
      icon: require('assets/images/CardCourse/Daily.png'),
      backgroundColor: 'darkGray',
      fontColor: 'white',
    },
  ]);
  const [cardsRecommended] = useState([
    {
      title: 'Focus',
      type: 'meditation',
      length: '3-10 min',
      image: require('assets/images/CardCourse/Focus.png'),
      backgroundColor: 'lightGreen',
    },
    {
      title: 'Happiness',
      type: 'meditation',
      length: '3-10 min',
      image: require('assets/images/CardCourse/Happiness.png'),
      backgroundColor: 'lightYellow',
    },
  ]);
  return (
    <Component cards={cards} cardsRecommended={cardsRecommended} {...props} />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
