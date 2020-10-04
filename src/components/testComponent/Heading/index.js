import React from 'react';
import cn from 'classnames';

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
    SOLID: 'solid',
    LIGHT: 'light'
  },
  OPACITY: {
    SOLID: 'solid',
    LIGHT: 'light'
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
  opacity,
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
      'text-c300': !textColor || textColor === HEADING_OPTIONS.FONT_COLOR.SOLID,
      'text-c400': textColor === HEADING_OPTIONS.FONT_COLOR.LIGHT,

      // FONT OPACITY
      'text-opacity-100': !opacity || opacity === HEADING_OPTIONS.OPACITY.SOLID,
      'text-opacity-50': opacity === HEADING_OPTIONS.OPACITY.LIGHT,

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
