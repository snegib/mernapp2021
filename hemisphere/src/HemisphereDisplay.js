import React from 'react';
import northernPic from './image/northern-hemisphere.gif';
import southernPic from './image/southern-hemisphere.jpg';

const hemisphereConfig = {
  Northern: {
    text: 'It is northern hemisphere.',
    picture: northernPic,
  },
  Southern: {
    text: 'It is southern hemisphere.',
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  // deconstruct syntax 2016
  // Ternary expression
  const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
