import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const UploadingProgress = ({ progress }) => {
  const [offset, setOffset] = useState(0);
  let center = 20;
  const radius = 17;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (progress > 100) {
      return;
    }
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [progress, circumference]);

  return (
    <div>
      <svg className="svg z-0 w-10 h-10 ">
        <circle
          className="svg-circle-bg"
          stroke="#EEE"
          fill="#EE0000"
          cx={center}
          cy={center}
          r={radius}
        />
        strokeWidth={1}
        <circle
          className="svg-circle z-0"
          stroke="#78F1CD"
          cx={center}
          cy={center}
          r={radius}
          fill="#FFF"
          strokeWidth={1}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x={
            progress >= 100
              ? center - 9
              : progress < 10
              ? center - 3
              : progress < 20
              ? center - 4
              : center - 7
          }
          y={center + 4}
          className="svg-circle-text font-primary font-regular leading-4 text-xs transform   absolute  w-4 H-4  text-c400 "
        >
          {progress < 100 ? progress : (progress = 100)}
        </text>
      </svg>
    </div>
  );
};

UploadingProgress.propTypes = {
  /**
   * this is number of uploadng progress
   */
  progress: PropTypes.number
};
