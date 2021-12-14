import React from 'react';

const ImageList = props => {
  const image = props.images.map((image) => {
    return <img src={image.webformatURL} alt="" key={image.id} />;
  });
  return <div>{image}</div>;
};

export default ImageList;
