import React from 'react';
import { Heading } from '../Heading/index';

const ImageWithSideTitle = ({
  imgURL,
  iconURL,
  title,
  subTitle,
  titleColor
}) => {
  return (
    <div className="flex justify-around items-center rounded py-3">
      <div className="rounded-full h-10 w-10 flex items-center justify-center">
        <img
          className={` ${imgURL ? 'rounded-full h-full w-full' : 'h-4 w-4'}`}
          src={imgURL || iconURL}
          alt=""
        />
      </div>

      <div className="ml-5">
        <Heading
          fontSize="sm"
          children={title}
          textAlign="left"
          textColor={titleColor} // Options are down in a comment
          fontWeight="semibold"
        />
        {subTitle && (
          <span className="block mt-1 text-c500 text-xs text-left">
            {subTitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageWithSideTitle;

/*
Title Color Options: [
    'blue',
    'red',
    'lightblack',
    'dawnblack',
    'cloudgrey',
    'submarinegrey',
    'whitegray',
    'silvergrey',
    'offwhite',
    'green',
    'white',
    'black'
]
*/