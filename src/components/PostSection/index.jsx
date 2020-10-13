import React, { useState } from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import PopUp from '../OptionsBtn/index';

const PostSection = ({
  title,
  subTitle,
  imgURL,
  paragraph,
  bgImageOne,
  bgImageTwo,
  divHeight,
  smallRound,
  bgColor,
  pickIcon,
  searchIcon,
  options
}) => {
  const [iconDisplay, setIconDisplay] = useState('');
  const viewWidth = document.body.clientWidth;
  const orIconSm = { left: '46%' };
  const orIconLg = { left: '47.7%' };

  if (viewWidth <= 640) {
    divHeight = 150;
  }

  return (
    <div className="container">
      <ImageWithSideTitle title={title} subTitle={subTitle} imgURL={imgURL} />
      <p className="my-5 text-sm font-regular">{paragraph}</p>
      <div className="w-full grid grid-cols-2 gap-1 relative">
        <ReusableDiv
          bgImage={bgImageOne}
          divHeight={divHeight}
          smallRound={smallRound}
        />
        <div
          style={viewWidth <= 460 ? orIconSm : orIconLg}
          className="absolute bg-white flex items-center self-center justify-center rounded-full h-8 w-8 text-xs"
        >
          OR
        </div>

        <ReusableDiv
          bgImage={bgImageTwo}
          divHeight={divHeight}
          smallRound={smallRound}
        >
          <div className="flex flex-col items-center">
            <ReusableDiv
              bgColor={iconDisplay}
              fullRound={true}
              divWidth="60px"
              divHeight="60px"
              clickFunction={() => setIconDisplay(bgColor)}
            >
              <img src={pickIcon} alt="" style={{ width: '35px' }} />
            </ReusableDiv>

            <div className="flex mt-2">
              <ReusableDiv
                bgColor="white"
                fullRound={true}
                divHeight="28px"
                divWidth="28px"
              >
                <img src={searchIcon} alt="" style={{ width: '13px' }} />
              </ReusableDiv>
              <span className="mx-2"></span>
              <ReusableDiv
                bgColor="white"
                fullRound={true}
                divHeight="28px"
                divWidth="28px"
              >
                <PopUp appearOn="click" options={options} />
              </ReusableDiv>
            </div>
          </div>
        </ReusableDiv>
      </div>
    </div>
  );
};

export default PostSection;

{
  /* <div
            className={`flex flex-col justify-center items-center ${iconDisplay} `}
            onMouseOver={() => {
              setIconDisplay('opacity-100');
            }}
            onMouseOut={() => setIconDisplay('opacity-0')}
          >
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-white">
              <img src={pickIcon} alt="" style={{ width: '13px' }} />
            </div>
            <div className="flex mt-2">
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-white">
                <img src={searchIcon} alt="" style={{ width: '13px' }} />
              </div>
              <span className="mx-1"></span>
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-white">
                <PopUp appearOn="click" options={options} />
              </div>
            </div>
          </div> */
}
