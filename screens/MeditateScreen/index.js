/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { scaleX, scaleY } from 'constants/size';

import Component from './component';

const MeditateScreen = (props) => {
  const [filters] = useState([
    {
      title: 'All',
      icon: require('assets/images/Filter/All.png'),
    },
    {
      title: 'My',
      icon: require('assets/images/Filter/My.png'),
    },
    {
      title: 'Sleep',
      icon: require('assets/images/Filter/Sleep.png'),
    },
    {
      title: 'Anxious',
      icon: require('assets/images/Filter/Anxious.png'),
    },
    {
      title: 'Kids',
      icon: require('assets/images/Filter/Kids.png'),
    },
  ]);
  const [filterActive, setActiveFilter] = useState(0);
  const [musicCard] = useState({
    title: 'Daily Calm',
    type: 'apr 30',
    length: 'pause practice',
    icon: require('assets/images/CardCourse/DailyCalm.png'),
    backgroundColor: 'calm',
    fontColor: 'black',
  });
  const [cards] = useState([
    {
      title: '7 Days Of Calm',
      image: require('assets/images/CardMeditate/CalmDays.png'),
    },
    {
      title: 'Anxiety Release',
      image: require('assets/images/CardMeditate/Anxiety.png'),
    },
    {
      title: 'How To Meditate',
      image: require('assets/images/CardMeditate/HowTo.png'),
    },
    {
      title: 'Summertime Sadness',
      image: require('assets/images/CardMeditate/Summer.png'),
    },
  ]);

  return (
    <Component
      filters={filters}
      filterActive={filterActive}
      cards={cards}
      musicCard={musicCard}
      setActiveFilter={setActiveFilter}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MeditateScreen);
