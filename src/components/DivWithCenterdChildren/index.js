import React from 'react';
import cn from 'classnames';

export const ReusableDiv = ({
  children,
  bgImage,
  bgColor,
  paddingY,
  paddingX,
  divWidth,
  divHeight,
  className,
  fullRound,
  smallRound,
  withShadow,
  clickFunction
}) => {
  return (
    <div
      onClick={clickFunction}
      className={cn(
        'flex items-center justify-center',
        {
          ['bg-' + bgColor]: bgColor,
          'rounded-sm': smallRound,
          'rounded-full': fullRound,
          ['py-' + paddingY]: paddingY,
          ['px-' + paddingX]: paddingX,
          'shadow-sm': withShadow
        },
        className
      )}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: '100%',
        width: divWidth,
        height: divHeight
      }}
    >
      {children}
    </div>
  );
};
