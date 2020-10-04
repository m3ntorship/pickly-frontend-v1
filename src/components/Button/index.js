import React from 'react';
import cn from 'classnames';
export const BUTTON_OPTIONS = {
  PADDING: {
    ZERO: false, // no padding at all
    DEFAULT: 'default', // default padding == 2rem
    SMALL: 'small', // for footer section
    BIG: 'big', // big padding == 8rem,
    MOB_PADDING: 'mobile_padding'
  },
  WIDTH: {
    SMALL: 'small', // 8rem
    BIG: 'big' //16rem
  },
  HIEGHT: {
    SMALL: 'small', // 2.5rem
    BIG: 'big' // 3rem
  }
};

export const Button = ({
  children,
  rounded,
  bgColor,
  shadow,
  width,
  icon,
  padding,
  height,
  opacity,
  className
}) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center outline-none focus:outline-none',
        { 'shadow-md': shadow },
        { 'bg-opacity-50': opacity },
        { 'rounded-lg': rounded },
        { 'bg-c400': bgColor },
        { 'w-32': width === BUTTON_OPTIONS.WIDTH.SMALL },
        { 'w-56': width === BUTTON_OPTIONS.WIDTH.BIG },
        { 'h-10': height === BUTTON_OPTIONS.HIEGHT.SMALL },
        { 'h-12': height === BUTTON_OPTIONS.HIEGHT.BIG },
        { ['p-' + padding]: padding },
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
};
