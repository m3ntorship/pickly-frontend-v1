import React, { useEffect, useState } from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import { ShareBtn } from '../ShareBtn';
import { PICKLY } from '../../apis/clients';
import { HeartIcon } from './HeartIcon/index';
import cn from 'classnames';
import Popup from 'reactjs-popup';

const PostSection = ({
  _id,
  userName,
  postDate,
  userImage,
  postCaption,
  images,
  shareUrl,
  savesNumbers,
  isAnonymous,
  voted,
  updatePostData,
  updateSinglePostData,
  options,
  positions,
  appearOn
}) => {
  const postComponentFixedAssets = {
    saveIcon: 'http://www.svgshare.com/i/QW7.svg',
    anonymousIcon: 'http://svgur.com/i/QH6.svg'
  };
  const { saveIcon, anonymousIcon } = postComponentFixedAssets;
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    for (let img of images) {
      if (img.votes) {
        setTotalVotes(t => t + img.votes.count);
      }
    }
  }, [images]);

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

  // handle double Ckick event on the image
  const handleVote = (imageId, voted, postId) => {
    if (voted) {
      // here we will handle the vote on a voted post
      console.log("It's voooooted before");
    } else {
      PICKLY.createVoteAndRefetchPost(imageId, postId).then(res => {
        if (updatePostData) {
          updatePostData(postId, res.data.data);
        }
        if (updateSinglePostData) {
          updateSinglePostData(res.data.data);
        }
      });
    }
  };

  const dotsSvg = (
    <svg
      width="18"
      height="4"
      viewBox="0 0 18 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0ZM9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0ZM18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4C17.1046 4 18 3.10457 18 2Z"
        fill="#92929D"
      />
    </svg>
  );

  return (
    <div className="bg-white py-4 rounded-lg my-6">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <ImageWithSideTitle
          title={isAnonymous ? 'Anonymous' : userName}
          subTitle={`${dayIndex} ${monthName} at ${formatedHours}:${minutes} ${
            hours > 12 ? 'PM' : 'AM'
          }`}
          imgURL={userImage && userImage}
          iconURL={isAnonymous && anonymousIcon}
        />
        <Popup
          trigger={
            <button
              style={{ minWidth: '34px', minHeight: '34px' }}
              className="rounded-full shadow-2xl flex justify-center items-center"
            >
              {dotsSvg}
            </button>
          }
          on={appearOn}
          position={positions}
          keepTooltipInside
        >
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="py-2 px-10 text-md hover:bg-c100 hover:text-white transition-all duration-100 cursor-pointer"
                onClick={() => console.log('Clicked')}
              >
                {option}
              </div>
            );
          })}
        </Popup>
      </div>
      <p className=" w-11/12 mx-auto mt-5 text-sm font-regular">
        {postCaption && postCaption}
      </p>

      <div
        className={cn('relative grid grid-cols-1 gap-1 my-4', {
          'grid-cols-2': images.length > 1
        })}
      >
        {images && images.length > 1 && or}
        {images &&
          images.map(img => {
            return (
              <div className="relative" key={img._id}>
                <div
                  key={img._id}
                  className={cn('w-full pb-16/9', {
                    'pb-full': images.length === 2
                  })}
                >
                  <div className="absolute w-full h-full">
                    <img
                      src={img.url}
                      className="w-full h-full object-cover rounded-sm"
                      // style={{ Height: '100%' }}
                      alt=""
                      onDoubleClick={() => {
                        handleVote(img._id, voted, _id);
                      }}
                    />
                  </div>
                </div>{' '}
              </div>
            );
          })}
      </div>

      <div className="flex items-center justify-between w-11/12 mx-auto">
        <div className="flex items-center">
          <div className="flex  text-sm justify-around text-c300">
            <HeartIcon voted={voted} />
            <span className="ml-1 md:ml-3 text-xs md:text-base mt-1">
              {totalVotes && totalVotes} Votes
            </span>
          </div>

          <div className="flex text-sm justify-around text-c300 ml-4 lg:ml-6 ">
            <img src={saveIcon} alt="" className="w-3 md:w-4" />
            <span className="ml-1 md:ml-3 text-xs md:text-base mt-1">
              {savesNumbers && savesNumbers} Saved
            </span>
          </div>
        </div>
        <div>
          <ShareBtn url={shareUrl && shareUrl} />
        </div>
      </div>
    </div>
  );
};

const or = (
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
);

export default PostSection;
