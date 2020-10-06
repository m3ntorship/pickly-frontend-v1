import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

export const PARAGRAPH_OPTIONS = {
  FONT_SIZE: {
    XSMALL: 'xs',
    SMALL: 'sm',
    BASE: 'base',
    MEDIUM: 'md',
    LARGE: 'lg',
    XLARGE: 'xlg'
  },
  COLOR: {
    DARK: 'dark',
    LIGHT: 'light'
  },
  FONT_WEIGHT: {
    REGULAR: 'regular',
    MEDIUM: 'medium',
    SEMIBOLD: 'semibold',
    BOLD: 'bold'
  },
  FONT_COLOR: {
    BLUE: 'blue',
    RED: 'red',
    LIGHTBLACK: 'lightblack',
    DAWNBLACK: 'dawnblack',
    CLOUDGREY: 'cloudgrey',
    SUBMARINEGREY: 'submarinegrey',
    WHITEGREY: 'whitegray',
    SILVERGREY: 'silvergrey',
    OFFWHITE: 'offwhite',
    GREEN: 'green',
    WHITE: 'white',
    BLACK: 'black'
  },

  LINE_HEIGHT: {
    TIGHT: 'tight',
    NORMAL: 'normal',
    LOOSE: 'loose'
  },
  FONT_FAMILLY: {
    POPPINS: 'Poppins',
    ROBOTO: 'Roboto'
  }
};

export const PARAGRAPH = ({
  children,
  className,
  fontSize,
  textColor,
  fontWeight,
  lessOpacity,
  lineHeight,
  as = 'p'
}) => {
  const classes = cn(
    {
      // FONT SIZE
      'text-base': !fontSize || fontSize === PARAGRAPH_OPTIONS.FONT_SIZE.BASE,
      'text-xs': fontSize === PARAGRAPH_OPTIONS.FONT_SIZE.XSMALL,
      'text-sm': fontSize === PARAGRAPH_OPTIONS.FONT_SIZE.SMALL,
      'text-md': fontSize === PARAGRAPH_OPTIONS.FONT_SIZE.MEDIUM,
      'text-lg': fontSize === PARAGRAPH_OPTIONS.FONT_SIZE.LARGE,
      'text-xlg': fontSize === PARAGRAPH_OPTIONS.FONT_SIZE.XLARGE,

      // FONT WEIGHT
      'font-regular':
        !fontWeight || fontWeight === PARAGRAPH_OPTIONS.FONT_WEIGHT.REGULAR,
      'font-medium': fontWeight === PARAGRAPH_OPTIONS.FONT_WEIGHT.MEDIUM,
      'font-semibold': fontWeight === PARAGRAPH_OPTIONS.FONT_WEIGHT.SEMIBOLD,
      'font-bold': fontWeight === PARAGRAPH_OPTIONS.FONT_WEIGHT.BOLD,

      // FONT COLOR
      'text-c100': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.BLUE,
      'text-c200': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.RED,
      'text-c300': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.LIGHTBLACK,
      'text-c400': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.DAWNBLACK,
      'text-c500': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.CLOUDGREY,
      'text-c600': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.SUBMARINEGREY,
      'text-c700': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.WHITEGREY,
      'text-c800': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.SILVERGREY,
      'text-c900': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.OFFWHITE,
      'text-c1000': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.GREEN,
      'text-white': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.WHITE,
      'text-black': textColor === PARAGRAPH_OPTIONS.FONT_COLOR.BLACK,

      // FONT OPACITY
      'text-opacity-50': lessOpacity,

      // LINE HEIGHT
      'leading-4':
        !lineHeight || lineHeight === PARAGRAPH_OPTIONS.LINE_HEIGHT.NORMAL,
      'leading-3': lineHeight === PARAGRAPH_OPTIONS.LINE_HEIGHT.TIGHT,
      'leading-5': lineHeight === PARAGRAPH_OPTIONS.LINE_HEIGHT.LOOSE
    },
    className
  );

  return <>{React.createElement(as, { className: classes }, children)}</>;
};

PARAGRAPH.propTypes = {
  lessOpacity: PropTypes.bool
};
