import React from 'react';
import ToursByTagMarkup from './ToursByTagMarkup';

const ToursByTag = props => {
  const tag = props?.route?.params?.tag;

  return <ToursByTagMarkup {...props} tag={tag} />;
};

export default ToursByTag;
