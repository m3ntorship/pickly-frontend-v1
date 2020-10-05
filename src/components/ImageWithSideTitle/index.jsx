import React from 'react';
import cn from 'classnames';

export const TITLE_COLOR = {
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
};

const ImageWithSideText = ({ imgUrl, title, titleColor, subTitle }) => {
  return (
    <div className="flex justify-around rounded py-2">
      <img src={imgUrl} alt="" />

      <p
        className={cn({
          'text-c100': titleColor === TITLE_COLOR.BLUE,
          'text-c200': titleColor === TITLE_COLOR.RED,
          'text-c300': titleColor === TITLE_COLOR.LIGHTBLACK,
          'text-c400': titleColor === TITLE_COLOR.DAWNBLACK,
          'text-c500': titleColor === TITLE_COLOR.CLOUDGREY,
          'text-c600': titleColor === TITLE_COLOR.SUBMARINEGREY,
          'text-c700': titleColor === TITLE_COLOR.WHITEGREY,
          'text-c800': titleColor === TITLE_COLOR.SILVERGREY,
          'text-c900': titleColor === TITLE_COLOR.OFFWHITE,
          'text-c1000': titleColor === TITLE_COLOR.GREEN,
          'text-white': titleColor === TITLE_COLOR.WHITE,
          'text-black': titleColor === TITLE_COLOR.BLACK
        })}
      >
        {title}
        {subTitle && (
          <span className="block mt-1 text-c500 text-xs">{subTitle}</span>
        )}
      </p>
    </div>
  );
};

export default ImageWithSideText;
