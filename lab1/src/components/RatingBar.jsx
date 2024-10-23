import React from 'react';

const RatingBar = ({ rate }) => {
  const totalStars = 10;

  return (
    <div className="rating-bar">
      {Array.from({ length: totalStars }, (v, i) => (
        <span key={i} className={i < rate ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingBar;
