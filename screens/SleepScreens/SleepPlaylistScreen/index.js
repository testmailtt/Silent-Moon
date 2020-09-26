/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Component from './component';

const SleepPlaylistScreen = (props) => {
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

  const navigateToPlayer = () => {
    props.navigation.navigate(props.route.params.player, { type: 'sleep' });
  };

  return (
    <Component
      cardsRecommended={cardsRecommended}
      navigateToPlayer={navigateToPlayer}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SleepPlaylistScreen);
