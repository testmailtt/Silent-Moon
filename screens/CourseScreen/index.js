/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Component from './component';

const CourseScreen = (props) => {
  const [card] = useState({
    id: 'Happy Morning!',
    cover: require('assets/images/Course/Morning.png'),
    title: 'Happy Morning!',
    type: 'Course',
    description:
      'Ease the mind into a restful night’s sleep with these deep, ambient tones.',
    favoritesCount: 24234,
    listeningCount: 34234,
    maleVoice: [
      {
        title: 'Focus Attention',
        length: 10,
      },
      {
        title: 'Body Scan',
        length: 5,
      },
      {
        title: 'Making Happiness',
        length: 3,
      },
    ],
    femaleVoice: [
      {
        title: 'Body Scan',
        length: 5,
      },
      {
        title: 'Focus Attention',
        length: 7,
      },
      {
        title: 'Making Happiness',
        length: 3,
      },
    ],
  });

  const [activeTab, setActiveTab] = useState(0);

  return (
    <Component
      card={card}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CourseScreen);
