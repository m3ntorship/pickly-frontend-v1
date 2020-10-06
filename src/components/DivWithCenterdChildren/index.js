import React from 'react';
import cn from 'classnames';

export const ReusableDiv = ({
  children,
  bgImage,
  bgColor,
  rounded,
  divWidth,
  divHeight,
  clickFunction
}) => {
  return (
    <div
      onClick={() => clickFunction}
      className={cn('flex items-center justify-center', {
        ['bg-' + bgColor]: bgColor,
        'rounded-md': rounded
      })}
      style={{ backgroundImage: bgImage, width: divWidth, height: divHeight }}
    >
      {children}
    </div>
  );
};
