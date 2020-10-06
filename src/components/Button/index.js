import React from 'react';
import cn from 'classnames';

export const BUTTON_OPTIONS = {
  PADDING: {
    SMALL: 'small', // for footer section
    BIG: 'big' // big padding == 8rem,
  },
  backgroundColor: {
    Transparent: 'transparent',
    Blue: 'blue',
    Red: 'red',
    PrimaryBlack: 'PrimaryBlack',
    SecondaryBlack: 'SecondaryBlack',
    PrimaryGrey: 'PrimaryGrey',
    SecondaryGrey: 'SecondaryGrey',
    TertiaryGrey: 'TertiaryGrey',
    QuaternaryGrey: 'QuaternaryGrey',
    OffWhite: 'off white',
    Green: 'Green',
    White: 'White'
  },
  COLOR: {
    Blue: 'blue',
    Red: 'red',
    PrimaryBlack: 'PrimaryBlack',
    SecondaryBlack: 'SecondaryBlack',
    PrimaryGrey: 'PrimaryGrey',
    SecondaryGrey: 'SecondaryGrey',
    TertiaryGrey: 'TertiaryGrey',
    QuaternaryGrey: 'QuaternaryGrey',
    OffWhite: 'off white',
    Green: 'Green',
    White: 'White'
  }
};

export const Button = ({
  children,
  isRounded,
  backgroundColor,
  color,
  shadow,
  padding,
  isOpacity,
  className
}) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center outline-none focus:outline-none',
        { 'shadow-background': shadow },
        { 'bg-opacity-50': isOpacity },
        { 'rounded-lg': isRounded },
        { 'py-3 px-12': padding === BUTTON_OPTIONS.PADDING.BIG },
        { 'py-3 px-10': padding === BUTTON_OPTIONS.PADDING.SMALL },
        {
          'bg-transparent':
            backgroundColor === BUTTON_OPTIONS.backgroundColor.Transparent
        },
        { 'bg-c100': backgroundColor === BUTTON_OPTIONS.backgroundColor.Blue },
        { 'bg-c200': backgroundColor === BUTTON_OPTIONS.backgroundColor.Red },
        {
          'bg-c300':
            backgroundColor === BUTTON_OPTIONS.backgroundColor.PrimaryBlack
        },
        {
          'bg-c400':
            backgroundColor === BUTTON_OPTIONS.backgroundColor.SecondaryBlack
        },
        {
          'bg-c500':
            backgroundColor === BUTTON_OPTIONS.backgroundColor.PrimaryGrey
        },
        {
          'bg-c600':
            backgroundColor === BUTTON_OPTIONS.backgroundColor.SecondaryGrey
        },
        {
          'bg-c700':
            backgroundColor === BUTTON_OPTIONS.backgroundColor.TertiaryGrey
        },
        {
          'bg-c800':
            backgroundColor === BUTTON_OPTIONS.backgroundColor.QuaternaryGrey
        },
        {
          'bg-c900': backgroundColor === BUTTON_OPTIONS.backgroundColor.OffWhite
        },
        {
          'bg-c1000': backgroundColor === BUTTON_OPTIONS.backgroundColor.Green
        },
        {
          'bg-white': backgroundColor === BUTTON_OPTIONS.backgroundColor.White
        },
        { 'text-c100': color === BUTTON_OPTIONS.COLOR.Blue },
        { 'text-c200': color === BUTTON_OPTIONS.COLOR.Red },
        { 'text-c300': color === BUTTON_OPTIONS.COLOR.PrimaryBlack },
        { 'text-c400': color === BUTTON_OPTIONS.COLOR.SecondaryBlack },
        { 'text-c500': color === BUTTON_OPTIONS.COLOR.PrimaryGrey },
        { 'text-c600': color === BUTTON_OPTIONS.COLOR.SecondaryGrey },
        { 'text-c700': color === BUTTON_OPTIONS.COLOR.TertiaryGrey },
        { 'text-c800': color === BUTTON_OPTIONS.COLOR.QuaternaryGrey },
        { 'text-c900': color === BUTTON_OPTIONS.COLOR.OffWhite },
        { 'text-c1000': color === BUTTON_OPTIONS.COLOR.Green },
        { 'text-white': color === BUTTON_OPTIONS.COLOR.White },
        className
      )}
    >
      {children}
    </button>
  );
};
