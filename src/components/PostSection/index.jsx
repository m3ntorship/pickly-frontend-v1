import React, { useState, useEffect } from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import PopUp from '../OptionsBtn/index';
import { ShareBtn } from '../ShareBtn';

const PostSection = ({
  userName,
  postDate,
  userImage,
  postCaption,
  leftBgImage,
  rightBgImage,
  popupActionOptions,
  shareUrl,
  votesNumbers,
  savesNumbers
}) => {
  const postComponentFixedAssets = {
    pickIcon: 'http://www.svgshare.com/i/QXB.svg',
    searchIcon: 'https://i.imgur.com/inlBQ6A.png',
    saveIcon: 'http://www.svgshare.com/i/QW7.svg',
    bgColor: 'white'
  };
  const { pickIcon, searchIcon, saveIcon, bgColor } = postComponentFixedAssets;
  const [iconDisplay, setIconDisplay] = useState(!bgColor);

  return (
    <div className="container">
      <ImageWithSideTitle
        title={userName}
        subTitle={postDate}
        imgURL={userImage}
      />
      <p className="mt-5 text-sm font-regular">{postCaption}</p>

      <div className="grid grid-cols-2 gap-1 relative">
        <ReusableDiv smallRound={true} divHeight="100%">
          <img
            src={leftBgImage}
            className="w-full object-cover rounded-sm"
            style={{ maxHeight: '89%' }}
            alt=""
          />
        </ReusableDiv>

        <div
          className="absolute z-10"
          style={{
            left: 'calc(50% - 15px)',
            top: 'calc(50% - 15px)'
          }}
        >
          <ReusableDiv
            bgColor="white"
            className="text-xs"
            divHeight="30px"
            divWidth="30px"
            fullRound
            withShadow
          >
            <div>OR</div>
          </ReusableDiv>
        </div>

        <ReusableDiv divHeight="100%" smallRound={true}>
          <img
            src={rightBgImage}
            className="w-full object-cover rounded-sm"
            style={{ maxHeight: '89%' }}
            alt=""
          />
          <div className="flex flex-col items-center absolute">
            <ReusableDiv
              bgColor={iconDisplay}
              fullRound={true}
              divWidth="50px"
              divHeight="50px"
              clickFunction={() => setIconDisplay(bgColor)}
            >
              <img src={pickIcon} alt="" />
            </ReusableDiv>

            <div className="flex mt-2">
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <img src={searchIcon} alt="" style={{ width: '13px' }} />
              </div>
              <span className="mx-2"></span>
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <PopUp appearOn="click" options={popupActionOptions} />
              </div>
            </div>
          </div>
        </ReusableDiv>
      </div>

      <div className="flex items-center justify-between px-3">
        <div className="flex items-center">
          <div className="flex  text-sm justify-around text-c300">
            <img src={pickIcon} alt="" className="w-5" />

            <span className="ml-3">{votesNumbers} Votes</span>
          </div>

          <div className="flex text-sm justify-around text-c300 lg:ml-6 ml-4">
            <img src={saveIcon} alt="" className="w-4" />
            <span className="ml-3">{savesNumbers} Saved</span>
          </div>
        </div>
        <div>
          <ShareBtn url={shareUrl} />
        </div>
      </div>
    </div>
  );
};

export default PostSection;
