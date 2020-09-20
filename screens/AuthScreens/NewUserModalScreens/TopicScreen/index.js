/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { cardsColor } from 'constants/colors';

import Component from './component';

const TopicScreen = (props) => {
  const [chosenTopic, setTopicChosen] = useState([]);
  const [topicCards] = useState([
    {
      title: 'Reduce stress',
      image: require('assets/images/Auth/NewUserModal/Cards/Stress.png'),
      color: cardsColor.stress,
      textColor: cardsColor.text.stress,
    },
    {
      title: 'Improve Performance',
      image: require('assets/images/Auth/NewUserModal/Cards/Perf.png'),
      color: cardsColor.performance,
      textColor: cardsColor.text.performance,
    },
    {
      title: 'Increase Happiness',
      image: require('assets/images/Auth/NewUserModal/Cards/Happiness.png'),
      color: cardsColor.happiness,
      textColor: cardsColor.text.happiness,
    },
    {
      title: 'Reduce Anxiety',
      image: require('assets/images/Auth/NewUserModal/Cards/Anxiety.png'),
      color: cardsColor.anxiety,
      textColor: cardsColor.text.anxiety,
    },
    {
      title: 'Personal Growth',
      image: require('assets/images/Auth/NewUserModal/Cards/Growth.png'),
      color: cardsColor.growth,
      textColor: cardsColor.text.growth,
    },
    {
      title: 'Better Sleep',
      image: require('assets/images/Auth/NewUserModal/Cards/Sleep.png'),
      color: cardsColor.sleep,
      textColor: cardsColor.text.sleep,
    },
  ]);

  const chooseTopic = (cardTitle) => {
    if (!chosenTopic.find((item) => item === cardTitle)) {
      setTopicChosen(chosenTopic.concat(cardTitle));
    } else {
      setTopicChosen(_.remove(chosenTopic, (item) => item !== cardTitle));
    }
  };

  return (
    <Component
      topicCards={topicCards}
      chosenTopic={chosenTopic}
      chooseTopic={chooseTopic}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TopicScreen);
