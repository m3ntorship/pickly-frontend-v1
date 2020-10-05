import React from 'react';
import { Heading } from '../Heading/index';
import cn from 'classnames';

export const BG_COLOR = {
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

export const ImageWithSideTitle = ({
  imgUrl,
  title,
  subTitle,
  titleColor,
  bgColor,
  titleFontWeight,
  titleAlign
}) => {
  return (
    <button className="p-5">
      <div className="flex justify-around items-center rounded py-3">
        <div
          className={cn('p-3 rounded-full', {
            'bg-c100': bgColor === BG_COLOR.BLUE,
            'bg-c200': bgColor === BG_COLOR.RED,
            'bg-c300': bgColor === BG_COLOR.LIGHTBLACK,
            'bg-c400': bgColor === BG_COLOR.DAWNBLACK,
            'bg-c500': bgColor === BG_COLOR.CLOUDGREY,
            'bg-c600': bgColor === BG_COLOR.SUBMARINEGREY,
            'bg-c700': bgColor === BG_COLOR.WHITEGREY,
            'bg-c800': bgColor === BG_COLOR.SILVERGREY,
            'bg-c900': bgColor === BG_COLOR.OFFWHITE,
            'bg-c1000': bgColor === BG_COLOR.GREEN,
            'bg-white': bgColor === BG_COLOR.WHITE,
            'bg-black': bgColor === BG_COLOR.BLACK
          })}
        >
          <img src={imgUrl} alt="" />
        </div>

        <div className="ml-5">
          <Heading
            children={title}
            textAlign={titleAlign}
            textColor={titleColor}
            fontWeight={titleFontWeight}
          />
          {subTitle && (
            <span className="block mt-3 text-c500 text-xs text-left">
              {subTitle}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};
