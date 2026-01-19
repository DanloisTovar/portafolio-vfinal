import React from 'react';
import './StarBorder.css';

const StarBorder = ({
  color = '#3b82f6',
  colorEnd = '#06b6d4',
  speed = '4s',
  delay = '0s',
  starWidth = '300px',
  starHeight = '4px',
  borderRadius = '2rem',
  className = ''
}) => {
  return (
    <div 
      className={`star-border-container ${className}`}
      style={{
        '--star-color': color,
        '--star-color-end': colorEnd,
        '--star-speed': speed,
        '--star-delay': delay,
        '--star-width': starWidth,
        '--star-height': starHeight,
        '--star-radius': borderRadius
      }}
    >
      <div className="star-path">
        <div className="star"></div>
      </div>
    </div>
  );
};

export default StarBorder;
