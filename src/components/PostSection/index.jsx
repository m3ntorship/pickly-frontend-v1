import React from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import { ShareBtn } from '../ShareBtn';
import { PICKLY } from '../../apis/pickly';

import { HeartIcon } from './HeartIcon/index';
const PostSection = ({
  _id,
  userName,
  postDate,
  userImage,
  postCaption,
  leftImage,
  rightImage,
  shareUrl,
  votesNumbers,
  savesNumbers,
  isAnonymous,
  voted,
  updatePostData
}) => {
  const postComponentFixedAssets = {
    saveIcon: 'http://www.svgshare.com/i/QW7.svg',
    anonymousIcon: 'http://svgur.com/i/QH6.svg'
  };
  const { saveIcon, anonymousIcon } = postComponentFixedAssets;

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
  const handleVote = (imageID, voted, postId) => {
    if (voted) {
      // here we will handle the vote on a voted post
      console.log("It's voooooted before");
    } else {
      PICKLY.put(`/images/${imageID}/votes`).then(res => {
        console.log('voted');
        // get the new post data objrct and padd it to the function
        PICKLY.get(`/posts/${postId}`).then(res => {
          updatePostData(postId, res.data.data);
        });
      });
    }
  };

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
          <div>
            <img
              src={leftImage.url}
              className="w-full h-full object-cover rounded-sm"
              style={{ Height: '100%' }}
              alt=""
              onDoubleClick={() => {
                handleVote(leftImage._id, voted, _id);
              }}
            />
          </div>
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
          <div>
            <img
              src={rightImage.url}
              className="w-full h-full object-cover rounded-sm"
              style={{ Height: '100%' }}
              alt=""
              onDoubleClick={() => {
                handleVote(rightImage._id, voted, _id);
              }}
            />
          </div>
        </ReusableDiv>
      </div>

      <div className="flex items-center justify-between w-11/12 mx-auto">
        <div className="flex items-center">
          <div className="flex  text-sm justify-around text-c300">
            <HeartIcon voted={voted} />
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
