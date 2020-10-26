import React, { useEffect, useState } from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import { ShareBtn } from '../ShareBtn';
import { PICKLY } from '../../apis/clients';
import { HeartIcon } from './HeartIcon/index';
import cn from 'classnames';

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
  updatePostData
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
        updatePostData(postId, res.data.data);
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

      <div className="relative grid grid-cols-2 gap-1 my-4">
        {images.length > 1 && or}
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
              {totalVotes} Votes
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

const or = (
  <div
    className="absolute z-10 hidden sm:block"
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
