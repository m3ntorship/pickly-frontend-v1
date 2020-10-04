import React from 'react';
import cn from 'classnames';

export const Icon = ({ iconURL, bgColor, color }) => {
  return (
    <div
      className={
        (cn({
          'bg-white': bgColor === 'white',
          'bg-c900': bgColor === 'off white'
        }),
        'w-16 h-16 rounded-sm ')
      }
    >
      <img
        src={iconURL}
        alt=""
        className={cn({
          'fill-current': color === 'blue',
          'fill-c500': color === 'gray'
        })}
      />
    </div>
  );
};
