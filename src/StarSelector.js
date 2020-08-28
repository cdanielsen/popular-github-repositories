import React from 'react';
import './StarSelector.css';

const StarSelector = ({ numberOfStars, setNumberOfStars }) => {
  return (
    <div id="star-selector-container">
      <label htmlFor="star-selector">Github Stars (Minimum)</label>
      <input
        value={numberOfStars || 0}
        type="number"
        id="star-selector"
        name="star-selector"
        min="0"
        max="50000"
        onChange={({ target }) => setNumberOfStars(target.value)}
      />
    </div>
  );
}
 
export default StarSelector;
