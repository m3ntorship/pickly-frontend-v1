import React from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import { Icon } from '../Navbar-icons';

const PostSection = ({
  title,
  subTitle,
  imgURL,
  paragraph,
  bgImageOne,
  bgImageTwo,
  divWidth,
  divHeight,
  smallRound,
  pickIcon,
  searchIcon
}) => {
  return (
    <div>
      <ImageWithSideTitle title={title} subTitle={subTitle} imgURL={imgURL} />
      <p className="my-5 text-sm font-regular">{paragraph}</p>
      <div className="flex flex-col md:flex-row">
        <div className="relative flex">
          <ReusableDiv
            bgImage={bgImageOne}
            divHeight={divHeight}
            divWidth={divWidth}
            smallRound={smallRound}
          />
          <div className="absolute z-50 h-8 w-8 right-0 mt-48 -mr-4 bg-white my-auto rounded-full text-xs hidden lg:flex items-center justify-center">
            OR
          </div>
        </div>
        <ReusableDiv
          bgImage={bgImageTwo}
          divHeight={divHeight}
          divWidth={divWidth}
          smallRound={smallRound}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-full h-10 w-10">
              <ImageWithSideTitle iconURL={pickIcon} />
            </div>
            <div className="flex items-center mt-2">
              <div className="bg-white rounded-full h-10 w-10">
                <ImageWithSideTitle iconURL={searchIcon} />
              </div>
              <div className="mx-1 mt-"></div>
              <div className="bg-white rounded-full h-10 w-10">
                <ImageWithSideTitle iconURL={searchIcon} />
              </div>
            </div>
          </div>
        </ReusableDiv>
      </div>
    </div>
  );
};

export default PostSection;
