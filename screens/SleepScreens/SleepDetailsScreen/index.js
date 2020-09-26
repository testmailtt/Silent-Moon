/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Component from './component';

const SleepDetailsScreen = (props) => {
  const [card] = useState({
    id: 'Chocolate Insomnia',
    cover: require('assets/images/Sleep/Cards/ChocolateInsomnia.png'),
    title: 'Chocolate Insomnia',
    length: '45 min',
    type: 'sleep music',
    description:
      'Ease the mind into a restful night’s sleep with these deep, ambient tones.',
    favoritesCount: 24234,
    listeningCount: 34234,
  });

  const [cardsRecommended] = useState([
    {
      title: 'Night Island',
      type: 'SLEEP MUSIC',
      length: '45 min',
      image: require('assets/images/Sleep/Cards/NightIsland.png'),
    },
    {
      title: 'Orange Mint',
      type: 'SLEEP MUSIC',
      length: '45 min',
      image: require('assets/images/Sleep/Cards/OrangeMint.png'),
    },
  ]);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <Component
      card={card}
      activeTab={activeTab}
      cardsRecommended={cardsRecommended}
      setActiveTab={setActiveTab}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SleepDetailsScreen);
