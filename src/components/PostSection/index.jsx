import React from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import { ShareBtn } from '../ShareBtn';
import { HeartIcon } from "./HeartIcon/index"
const PostSection = ({
  userName,
  postDate,
  userImage,
  postCaption,
  leftBgImage,
  rightBgImage,
  // popupActionOptions,
  shareUrl,
  votesNumbers,
  savesNumbers,
  isAnonymous
}) => {
  const postComponentFixedAssets = {
    pickIcon: 'http://www.svgshare.com/i/QXB.svg',
    searchIcon: 'https://i.imgur.com/inlBQ6A.png',
    saveIcon: 'http://www.svgshare.com/i/QW7.svg',
    bgColor: 'white',
    anonymousIcon: 'http://svgur.com/i/QH6.svg'
  };
  const {
    pickIcon,
    // searchIcon,
    saveIcon,
    // bgColor,
    anonymousIcon
  } = postComponentFixedAssets;
  // const [iconDisplay, setIconDisplay] = useState(!bgColor);

  // Handle Post Time

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const date = new Date(postDate);
  const monthName = months[date.getMonth()];
  const dayIndex = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formatedHours = ((hours + 11) % 12) + 1;

  return (
    <div className="bg-white py-4 rounded-lg my-6">
      <div className="w-11/12 mx-auto">
        <ImageWithSideTitle
          title={isAnonymous ? 'Anonymous' : userName}
          subTitle={`${dayIndex} ${monthName} at ${formatedHours}:${minutes} ${
            hours > 12 ? 'PM' : 'AM'
          }`}
          imgURL={userImage && userImage}
          iconURL={isAnonymous && anonymousIcon}
        />
      </div>
      <p className=" w-11/12 mx-auto mt-5 text-sm font-regular">
        {postCaption}
      </p>

      <div className="grid grid-cols-2 gap-1 relative my-3">
        <ReusableDiv smallRound={true} divHeight="100%">
          <img
            src={leftBgImage}
            className="w-full h-full object-cover rounded-sm"
            style={{ maxHeight: '100%' }}
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
            className="w-full h-full object-cover rounded-sm"
            style={{ maxHeight: '100%' }}
            alt=""
          />
          {/* This section takes class hidden untill we add these features */}
          {/* <div className="flex-col items-center absolute hidden">
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
          </div> */}
        </ReusableDiv>
      </div>

      <div className="flex items-center justify-between w-11/12 mx-auto">
        <div className="flex items-center">
          <div className="flex  text-sm justify-around text-c300">
            {/* <img src={pickIcon} alt="" className="w-4 md:w-6" /> */}
            <HeartIcon />
            <span className="ml-1 md:ml-3 text-xs md:text-base mt-1">
              {votesNumbers} Votes
            </span>
          </div>

          <div className="flex text-sm justify-around text-c300 ml-4 lg:ml-6 ">
            <img src={saveIcon} alt="" className="w-3 md:w-4" />
            <span className="ml-1 md:ml-3 text-xs md:text-base mt-1">
              {savesNumbers} Saved
            </span>
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
