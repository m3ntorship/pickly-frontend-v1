import React, { useState } from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import PopUp from '../OptionsBtn/index';
import { ShareBtn } from '../ShareBtn';

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
  saveIcon,
  options,
  url
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
      <ReusableDiv>
        <div className="flex w-full items-center justify-between mt-6 px-4">
          <div className="flex">
            <ReusableDiv fullRound={true} divWidth="107px" divHeight="25px">
              <div className="flex w-full text-sm justify-around text-c300">
                <img src={pickIcon} alt="" className="w-5" />
                120k Votes
              </div>
            </ReusableDiv>
            <ReusableDiv
              fullRound={true}
              divWidth="107px"
              divHeight="25px"
              className="ml-6"
            >
              <div className="flex w-full text-sm justify-around text-c300">
                <img src={saveIcon} alt="" className="w-4" />
                12 Saved
              </div>
            </ReusableDiv>
          </div>
          <div>
            <ReusableDiv>
              <ShareBtn url={url} />
            </ReusableDiv>
          </div>
        </div>
      </ReusableDiv>
    </div>
  );
};

export default PostSection;
