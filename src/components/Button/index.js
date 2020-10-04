import React from 'react';
import cn from 'classnames';

export const BUTTON_OPTIONS = {
  PADDING: {
    SMALL: 'small', // for footer section
    BIG: 'big' // big padding == 8rem,
  },
  backgroundColor: {
    C100: 'blue',
    C200: 'red',
    C300: 'black1',
    C400: 'black2',
    C500: 'grey1',
    C600: 'grey2',
    C700: 'grey3',
    C800: 'grey4',
    C900: 'off white',
    C1000: 'green',
    WHITE: 'white'
  },
  COLOR: {
    C100: 'blue',
    C200: 'red',
    C300: 'black1',
    C400: 'black2',
    C500: 'grey1',
    C600: 'grey2',
    C700: 'grey3',
    C800: 'grey4',
    C900: 'off white',
    C1000: 'green',
    WHITE: 'white'
  }
};

export const Button = ({
  children,
  rounded,
  backgroundColor,
  color,
  shadow,
  padding,
  opacity,
  className
}) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center outline-none focus:outline-none',
        { 'shadow-outline': shadow },
        { 'bg-opacity-50': opacity },
        { 'rounded-lg': rounded },
        { 'py-3 px-12': padding === BUTTON_OPTIONS.PADDING.BIG },
        { 'py-3 px-10': padding === BUTTON_OPTIONS.PADDING.SMALL },
        { 'bg-c100': backgroundColor === BUTTON_OPTIONS.backgroundColor.C100 },
        { 'bg-c200': backgroundColor === BUTTON_OPTIONS.backgroundColor.C200 },
        { 'bg-c300': backgroundColor === BUTTON_OPTIONS.backgroundColor.C300 },
        { 'bg-c400': backgroundColor === BUTTON_OPTIONS.backgroundColor.C400 },
        { 'bg-c500': backgroundColor === BUTTON_OPTIONS.backgroundColor.C500 },
        { 'bg-c600': backgroundColor === BUTTON_OPTIONS.backgroundColor.C600 },
        { 'bg-c700': backgroundColor === BUTTON_OPTIONS.backgroundColor.C700 },
        { 'bg-c800': backgroundColor === BUTTON_OPTIONS.backgroundColor.C800 },
        { 'bg-c900': backgroundColor === BUTTON_OPTIONS.backgroundColor.C900 },
        {
          'bg-c1000': backgroundColor === BUTTON_OPTIONS.backgroundColor.C1000
        },
        {
          'bg-white': backgroundColor === BUTTON_OPTIONS.backgroundColor.WHITE
        },
        { 'text-c100': color === BUTTON_OPTIONS.COLOR.C100 },
        { 'text-c200': color === BUTTON_OPTIONS.COLOR.C200 },
        { 'text-c300': color === BUTTON_OPTIONS.COLOR.C300 },
        { 'text-c400': color === BUTTON_OPTIONS.COLOR.C400 },
        { 'text-c500': color === BUTTON_OPTIONS.COLOR.C500 },
        { 'text-c600': color === BUTTON_OPTIONS.COLOR.C600 },
        { 'text-c700': color === BUTTON_OPTIONS.COLOR.C700 },
        { 'text-c800': color === BUTTON_OPTIONS.COLOR.C800 },
        { 'text-c900': color === BUTTON_OPTIONS.COLOR.C900 },
        { 'text-c1000': color === BUTTON_OPTIONS.COLOR.C1000 },
        { 'text-white': color === BUTTON_OPTIONS.COLOR.WHITE },
        className
      )}
    >
      {children}
    </button>
  );
};
