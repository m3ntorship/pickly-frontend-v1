import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

export const HEADING_OPTIONS = {
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
  TEXT_ALIGN: {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right'
  },
  LINE_HEIGHT: {
    TIGHT: 'tight',
    NORMAL: 'normal',
    LOOSE: 'loose'
  }
};

export const Heading = ({
  children,
  className,
  fontSize,
  textColor,
  fontWeight,
  lessOpacity,
  textAlign,
  lineHeight,
  as = 'p'
}) => {
  const classes = cn(
    {
      // FONT SIZE
      'text-base': !fontSize || fontSize === HEADING_OPTIONS.FONT_SIZE.BASE,
      'text-xs': fontSize === HEADING_OPTIONS.FONT_SIZE.XSMALL,
      'text-sm': fontSize === HEADING_OPTIONS.FONT_SIZE.SMALL,
      'text-md': fontSize === HEADING_OPTIONS.FONT_SIZE.MEDIUM,
      'text-lg': fontSize === HEADING_OPTIONS.FONT_SIZE.LARGE,
      'text-xlg': fontSize === HEADING_OPTIONS.FONT_SIZE.XLARGE,

      // FONT WEIGHT
      'font-regular':
        !fontWeight || fontWeight === HEADING_OPTIONS.FONT_WEIGHT.REGULAR,
      'font-medium': fontWeight === HEADING_OPTIONS.FONT_WEIGHT.MEDIUM,
      'font-semibold': fontWeight === HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD,
      'font-bold': fontWeight === HEADING_OPTIONS.FONT_WEIGHT.BOLD,

      // FONT COLOR
      'text-c100': textColor === HEADING_OPTIONS.FONT_COLOR.BLUE,
      'text-c200': textColor === HEADING_OPTIONS.FONT_COLOR.RED,
      'text-c300': textColor === HEADING_OPTIONS.FONT_COLOR.LIGHTBLACK,
      'text-c400': textColor === HEADING_OPTIONS.FONT_COLOR.DAWNBLACK,
      'text-c500': textColor === HEADING_OPTIONS.FONT_COLOR.CLOUDGREY,
      'text-c600': textColor === HEADING_OPTIONS.FONT_COLOR.SUBMARINEGREY,
      'text-c700': textColor === HEADING_OPTIONS.FONT_COLOR.WHITEGREY,
      'text-c800': textColor === HEADING_OPTIONS.FONT_COLOR.SILVERGREY,
      'text-c900': textColor === HEADING_OPTIONS.FONT_COLOR.OFFWHITE,
      'text-c1000': textColor === HEADING_OPTIONS.FONT_COLOR.GREEN,
      'text-white': textColor === HEADING_OPTIONS.FONT_COLOR.WHITE,
      'text-black': textColor === HEADING_OPTIONS.FONT_COLOR.BLACK,

      // FONT OPACITY
      'text-opacity-50': lessOpacity,

      // TEXT ALIGN
      'text-center':
        !textAlign || textAlign === HEADING_OPTIONS.TEXT_ALIGN.CENTER,
      'text-left': textAlign === HEADING_OPTIONS.TEXT_ALIGN.LEFT,
      'text-right': textAlign === HEADING_OPTIONS.TEXT_ALIGN.RIGHT,

      // LINE HEIGHT
      'leading-4':
        !lineHeight || lineHeight === HEADING_OPTIONS.LINE_HEIGHT.NORMAL,
      'leading-3': lineHeight === HEADING_OPTIONS.LINE_HEIGHT.TIGHT,
      'leading-5': lineHeight === HEADING_OPTIONS.LINE_HEIGHT.LOOSE
    },
    className
  );

  return <>{React.createElement(as, { className: classes }, children)}</>;
};

Heading.propTypes = {
  lessOpacity: PropTypes.bool
};
