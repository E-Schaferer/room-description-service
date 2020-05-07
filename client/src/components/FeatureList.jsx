/* eslint-disable react/prop-types */
import React from 'react';
import FeatureListEntry from './FeatureListEntry';

const FeatureList = (props) => {
  const { amenities, className } = props;
  if (amenities === undefined) {
    return (
      <div />
    );
  }
  return (
    <div className={className}>
      {amenities.map((amenity) => {
        const { feature, description, _id } = amenity;
        return (
          <FeatureListEntry key={_id} feature={feature} description={description} />
        );
      })}
    </div>
  );
};

export default FeatureList;