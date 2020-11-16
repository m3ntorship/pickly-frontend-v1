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
        handleNotification(_id);
        if (updatePostData) {
          updatePostData(postId, res.data.post);
        }
        if (updateSinglePostData) {
          updateSinglePostData(res.data.post);
        }
      });
    }
  };

  // handle sending notification to the backend
  const handleNotification = id => {
    PICKLY.createSingleNotification(id);
  };

  /*  
    __ make two options lists 
    - One shows in the posts owned by curent user
    - other shows in the others posts
  */

  const optionsForCurrentUserPosts = [
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
  const optionsForOtherUsersPosts = [
    {
      svg: reportIcon,
      text: 'Report Post',
      fun: () => {
        console.log('reposr clicked');
      },
      textColor: '#000'
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
          <OptionsBtn
            options={optionsForCurrentUserPosts}
            position="left top"
          />
        )}
        {!ownedByCurrentUser && (
          <OptionsBtn options={optionsForOtherUsersPosts} position="left top" />
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
                  handleNotification={handleNotification}
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
                      handleNotification={handleNotification}
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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17 8C17.5523 8 18 8.44772 18 9V19C18 20.6569 16.6569 22 15 22H9C7.34315 22 6 20.6569 6 19V9C6 8.44772 6.44772 8 7 8H17ZM16 10H8V19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19V10ZM9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H9V3Z"
      fill="#E03131"
    />
  </svg>
);
const reportIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 2C16.2652 2 16.5196 2.10536 16.7071 2.29289L21.7071 7.29289C21.8946 7.48043 22 7.73478 22 8V15C22 15.2339 21.918 15.4605 21.7682 15.6402L16.7682 21.6402C16.5782 21.8682 16.2968 22 16 22H8C7.73478 22 7.48043 21.8946 7.29289 21.7071L2.29289 16.7071C2.10536 16.5196 2 16.2652 2 16V8C2 7.73478 2.10536 7.48043 2.29289 7.29289L7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16ZM15.5858 4H8.41421L4 8.41421V15.5858L8.41421 20H15.5316L20 14.6379V8.41421L15.5858 4ZM12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16ZM12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
      fill="black"
    />
  </svg>
);
export default PostSection;
