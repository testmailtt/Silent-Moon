/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Component from './component';

const SleepHomeScreen = (props) => {
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
  const [cardOfDay] = useState({
    title: 'The ocean moon',
    description: 'Non-stop 8-hour mixes of our most popular sleep audio',
    image: require('assets/images/Sleep/CardOfDay.png'),
  });
  const [cardsRecommended] = useState([
    {
      title: 'Night Island',
      type: 'SLEEP MUSIC',
      length: '45 min',
      image: require('assets/images/Sleep/Cards/NightIsland.png'),
    },
    {
      title: 'Sweet Sleep',
      type: 'SLEEP MUSIC',
      length: '45 min',
      image: require('assets/images/Sleep/Cards/SweetSleep.png'),
    },
    {
      title: 'Chocolate Insomnia',
      type: 'SLEEP MUSIC',
      length: '45 min',
      image: require('assets/images/Sleep/Cards/ChocolateInsomnia.png'),
    },
    {
      title: 'Orange Mint',
      type: 'SLEEP MUSIC',
      length: '45 min',
      image: require('assets/images/Sleep/Cards/OrangeMint.png'),
    },
  ]);

  const navigateToDetails = () => {
    props.navigation.navigate(props.route.params.sleepDetails);
  };

  const navigateToPlaylist = () => {
    props.navigation.navigate(props.route.params.sleepPlaylist);
  };

  return (
    <Component
      cardOfDay={cardOfDay}
      filters={filters}
      cardsRecommended={cardsRecommended}
      filterActive={filterActive}
      setActiveFilter={setActiveFilter}
      navigateToDetails={navigateToDetails}
      navigateToPlaylist={navigateToPlaylist}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SleepHomeScreen);
