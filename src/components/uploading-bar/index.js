import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const ProgressBar = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke
}) => {
  const [offset, setOffset] = useState(0);
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [progress, circumference]);

  return (
    <>
      <svg width={size} height={size}>
        <circle
          fill="none"
          style={{ opacity: '20%' }}
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          fill="none"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDashoffset={offset}
          strokeDasharray={`${circumference} ${circumference}`}
          transform={`rotate(-180 ${size / 2} ${size / 2})`}
        />
        <text
          fill="#6741D9"
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}
          textAnchor="middle"
          x="50%"
          y="50%"
        >
          {progress}%
        </text>
      </svg>
    </>
  );
};
ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired
};
