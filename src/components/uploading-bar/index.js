import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const ProgressBar = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke
}) => {
  const [offset, setOffset] = useState(null);
  const circleRef = useRef(null);
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  useEffect(() => {
    // prettier-ignore
    const progressOffset = ((100 - progress) / 100) * circumference;

    setOffset(progressOffset);
    circleRef.current.style = 'transition: 1100ms ease-in-out;';
  }, [setOffset, circumference, progress, offset]);

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
          ref={circleRef}
          strokeWidth={strokeWidth}
          strokeDashoffset={offset}
          strokeDasharray={`${circumference} ${circumference}`}
          transform={`rotate(-180 ${size / 2} ${size / 2})`}
        />
        <text
          fill="6741D9"
          className="font-bold text-3xl "
          x={center}
          y={center}
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
