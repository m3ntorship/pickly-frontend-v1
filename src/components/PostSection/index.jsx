import React, { useState } from 'react';
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
  const viewWidth = window.innerWidth || document.body.clientWidth;
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
      <p className="my-5 text-sm font-regular">{postCaption}</p>
      <div className="w-full grid grid-cols-2 gap-1 relative">
        <div>
          <ReusableDiv
            bgImage={leftBgImage}
            divHeight={viewWidth <= 640 ? '200px' : '400px'}
            smallRound={true}
          />
        </div>
        <div
          style={{ left: '48%' }}
          className="absolute bg-white md:flex items-center self-center justify-center rounded-full h-8 w-8 text-xs hidden "
        >
          OR
        </div>

        <div>
          <ReusableDiv
            bgImage={rightBgImage}
            divHeight={viewWidth <= 640 ? '200px' : '400px'}
            smallRound={true}
          >
            <div className="flex flex-col items-center">
              <ReusableDiv
                bgColor={iconDisplay}
                fullRound={true}
                divWidth="55px"
                divHeight="55px"
                clickFunction={() => setIconDisplay(bgColor)}
              >
                <img src={pickIcon} alt="" style={{ width: '25px' }} />
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
      </div>
      <div className="flex w-full items-center justify-between mt-6 py-2 px-3">
        <div className="flex">
          <div className="flex w-32 text-sm justify-around text-c300">
            <img src={pickIcon} alt="" className="w-5" />
            {votesNumbers} Votes
          </div>

          <div className="flex w-32 text-sm justify-around text-c300 ml-6">
            <img src={saveIcon} alt="" className="w-4" />
            {savesNumbers} Saved
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
