import React, { useEffect, useState } from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import { ShareBtn } from '../ShareBtn';
import { PICKLY } from '../../apis/clients';
import { HeartIcon } from './HeartIcon/index';
import cn from 'classnames';
import OptionsBtn from '../OptionsBtn';
import { useEmblaCarousel } from 'embla-carousel/react';
import useMedia from '../../helpers/useMedia';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const viewportCss = {
  overflow: 'visible'
};
const containerCss = {
  display: 'flex'
};
const slideCss = {
  position: 'relative',
  minWidth: '100%',
  margin: '10px 1px'
};

const PostSection = ({
  _id,
  data,
  voted,
  images,
  setData,
  postDate,
  userName,
  shareUrl,
  userImage,
  postCaption,
  isAnonymous,
  updatePostData,
  ownedByCurrentUser,
  updateSinglePostData
}) => {
  const postComponentFixedAssets = {
    saveIcon: 'http://www.svgshare.com/i/QW7.svg',
    anonymousIcon: 'http://svgur.com/i/QH6.svg'
  };
  const { anonymousIcon } = postComponentFixedAssets;
  const [totalVotes, setTotalVotes] = useState(0);
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    slidesInView: true
  });

  // for date formate
  const targetPostDate = dayjs(postDate);

  // return true if it's mobile view
  const isMobile = useMedia(['(max-width: 600px)'], [true], false);

  useEffect(() => {
    for (let img of images) {
      if (img.votes) {
        setTotalVotes(t => t + img.votes.count);
      }
    }
  }, [images]);

  // handle double Ckick event on the image
  const handleVote = (imageId, voted, postId) => {
    if (voted) {
      // here we will handle the vote on a voted post
      console.log("It's voooooted before");
    } else {
      PICKLY.createVoteAndRefetchPost(imageId, postId).then(res => {
        if (updatePostData) {
          updatePostData(postId, res.data.post); // instead of res.data.dae
        }
        if (updateSinglePostData) {
          updateSinglePostData(res.data.data);
        }
      });
    }
  };

  const options = [
    {
      svg: deleteIcon,
      text: 'Delete Post',
      fun: () => {
        PICKLY.deletePost(_id)
          .then(res => setData(data.filter(post => post._id !== _id)))
          .catch(err => console.log(err.message));
      },
      textColor: '#e03131'
    }
  ];

  return (
    <div className="bg-white py-4 rounded-lg my-6 p-1">
      <div className="px-4 mx-auto flex justify-between items-center">
        <ImageWithSideTitle
          title={isAnonymous ? 'Anonymous' : userName}
          subTitle={targetPostDate.fromNow(true)}
          imgURL={userImage && !isAnonymous && userImage}
          iconURL={isAnonymous && anonymousIcon}
        />
        {ownedByCurrentUser && (
          <OptionsBtn options={options} position="left top" />
        )}
      </div>
      <div className="h-full">
        <p className="px-4 mx-auto mt-5 text-sm font-regular tracking-wide leading-4">
          {postCaption && postCaption}
        </p>
      </div>
      {!isMobile && (
        <div
          className={cn('relative grid grid-cols-1 gap-1 my-4', {
            'grid-cols-2': images.length > 1
          })}
        >
          {images && images.length > 1 && or}
          {images &&
            images.map(img => {
              return (
                <PostImage
                  key={img._id}
                  images={images}
                  img={img}
                  voted={voted}
                  handleVote={handleVote}
                  _id={_id}
                  totalVotes={totalVotes}
                />
              );
            })}
        </div>
      )}

      {isMobile && (
        <div style={viewportCss} ref={emblaRef}>
          <div style={containerCss}>
            {images &&
              images.map(img => {
                return (
                  <div style={slideCss} key={img._id}>
                    <PostImage
                      images={images}
                      img={img}
                      voted={voted}
                      handleVote={handleVote}
                      _id={_id}
                      totalVotes={totalVotes}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-4 mx-auto">
        <div className="flex items-center">
          <div className="flex  text-sm justify-around text-c300">
            <span className="ml-1 md:ml-2 text-xs md:text-base">
              {totalVotes && totalVotes} Votes
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

const PostImage = ({ images, img, voted, handleVote, _id, totalVotes }) => {
  return (
    <div className="relative" key={img._id}>
      <div
        key={img._id}
        className={cn('w-full pb-16/9', {
          'pb-full': images.length === 2
        })}
      >
        <div
          className="group absolute w-full h-full"
          onDoubleClick={() => {
            handleVote(img._id, voted, _id);
          }}
        >
          <img
            src={img.url}
            className="absolute w-full h-full object-cover rounded-sm"
            alt=""
          />
          <div
            className={cn(
              'absolute grid grid-cols-1 justify-items-center items-center w-full h-full',
              { 'hidden md:group-hover:grid': !voted }
            )}
          >
            <div
              className={cn(
                'w-12 h-12 md:w-24 md:h-24  bg-c200  cursor-pointer rounded-full grid grid-cols-1 justify-items-center',
                { 'bg-c500': !img.votedByUser }
              )}
              onClick={() => {
                handleVote(img._id, voted, _id);
              }}
            >
              <HeartIcon voted={voted} />
              {voted && (
                <span className="text-white font-bold text-xxs sm:text-xs">
                  {img.votes
                    ? totalVotes &&
                      Math.round((img.votes.count / totalVotes) * 100)
                    : '0'}
                  %
                </span>
              )}
            </div>
          </div>
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

const deleteIcon = (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 6C13.5523 6 14 6.44772 14 7V17C14 18.6569 12.6569 20 11 20H5C3.34315 20 2 18.6569 2 17V7C2 6.44772 2.44772 6 3 6H13ZM12 8H4V17C4 17.5523 4.44772 18 5 18H11C11.5523 18 12 17.5523 12 17V8ZM5 1C5 0.447715 5.44772 0 6 0H10C10.5523 0 11 0.447715 11 1V2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H5V1Z"
      fill="#E03131"
    />
  </svg>
);

export default PostSection;
