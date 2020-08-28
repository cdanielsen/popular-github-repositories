import React from 'react';

const StarSelector = ({ numberOfStars, setNumberOfStars }) => {
  return (
    <>
      <label htmlFor="star-selector">Github Stars</label>
      <input
        value={numberOfStars || 0}
        type="number"
        id="star-selector"
        name="star-selector"
        min="0"
        max="50000"
        onChange={({ target }) => setNumberOfStars(target.value)}
      />
    </>
  );
}
 
export default StarSelector;
