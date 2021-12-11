import React from 'react';
import northenPic from './image/northen-hemisphere.gif';
import southernPic from './image/southern-hemisphere.jpg';

const HemisphereDisplay = ({ latitude }) => {
  // deconstruct syntax 2016
  // Ternary expression
  const hemisphere =
    latitude > 0 ? 'Northern hemisphere' : 'Southern hemisphere';
  const picture = latitude > 0 ? northenPic : southernPic;
  return (
    <div>
      <img src={picture} alt="" />
      {hemisphere}
    </div>
  );
};

export default HemisphereDisplay;
