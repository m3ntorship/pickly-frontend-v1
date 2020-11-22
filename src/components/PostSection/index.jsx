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
            {images && images.length > 1 && (
              <span className="ml-1 md:ml-2 text-xs md:text-base">
                {totalVotes && totalVotes} Votes
              </span>
            )}
            {images && images.length < 2 && (
              <div className="flex justify-between items-center">
                <button className="flex justify-between items-center">
                  <div className="mr-1"> {likeBtn}</div>
                  Yes
                </button>
                <button className="flex justify-between items-center ml-5">
                  <div className="mr-1 fill-current"> {dislike}</div>
                  No
                </button>
              </div>
            )}
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
            if (images.length > 1) {
              handleVote(img._id, voted, _id);
            }
          }}
        >
          <img
            src={img.url}
            className="absolute w-full h-full object-cover rounded-sm"
            alt=""
          />
          {images && images.length > 1 && (
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
          )}
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
const likeBtn = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7633 12.6511C21.157 12.1308 21.375 11.4933 21.375 10.83C21.375 9.77765 20.7867 8.78156 19.8398 8.22609C19.5961 8.08311 19.3185 8.00786 19.0359 8.00812H13.4156L13.5563 5.12765C13.5891 4.43156 13.343 3.77062 12.8648 3.26672C12.6302 3.01834 12.3471 2.82073 12.0331 2.68609C11.7191 2.55144 11.3807 2.48263 11.0391 2.4839C9.82031 2.4839 8.74219 3.30422 8.41875 4.47844L6.40547 11.7675H3.375C2.96016 11.7675 2.625 12.1027 2.625 12.5175V21.0487C2.625 21.4636 2.96016 21.7987 3.375 21.7987H17.468C17.6836 21.7987 17.8945 21.7566 18.0891 21.6722C19.2047 21.1964 19.9242 20.1066 19.9242 18.8972C19.9242 18.6019 19.882 18.3112 19.7977 18.03C20.1914 17.5097 20.4094 16.8722 20.4094 16.2089C20.4094 15.9136 20.3672 15.623 20.2828 15.3417C20.6766 14.8214 20.8945 14.1839 20.8945 13.5206C20.8898 13.2253 20.8477 12.9323 20.7633 12.6511ZM4.3125 20.1112V13.455H6.21094V20.1112H4.3125ZM19.2281 11.8378L18.7148 12.2831L19.0406 12.8784C19.148 13.0745 19.2036 13.2947 19.2023 13.5183C19.2023 13.905 19.0336 14.273 18.743 14.5261L18.2297 14.9714L18.5555 15.5667C18.6628 15.7628 18.7185 15.983 18.7172 16.2066C18.7172 16.5933 18.5484 16.9612 18.2578 17.2144L17.7445 17.6597L18.0703 18.255C18.1776 18.4511 18.2333 18.6713 18.232 18.8948C18.232 19.4198 17.9227 19.8933 17.4445 20.1089H7.71094V13.38L10.043 4.93078C10.1031 4.71422 10.2322 4.52316 10.4107 4.38655C10.5891 4.24995 10.8073 4.17524 11.032 4.17375C11.2102 4.17375 11.3859 4.22531 11.5266 4.33078C11.7586 4.50422 11.8828 4.76672 11.8687 5.04562L11.6437 9.69562H19.0125C19.4297 9.95109 19.6875 10.3823 19.6875 10.83C19.6875 11.2167 19.5188 11.5823 19.2281 11.8378Z"
      fill="#343A40"
    />
  </svg>
);
const dislike = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7633 11.6346C21.157 12.1549 21.375 12.7924 21.375 13.4556C21.375 14.508 20.7867 15.5041 19.8398 16.0596C19.5961 16.2025 19.3185 16.2778 19.0359 16.2775H13.4156L13.5563 19.158C13.5891 19.8541 13.343 20.515 12.8648 21.0189C12.6302 21.2673 12.3471 21.4649 12.0331 21.5996C11.7191 21.7342 11.3807 21.803 11.0391 21.8017C9.82031 21.8017 8.74219 20.9814 8.41875 19.8072L6.40547 12.5181H3.375C2.96016 12.5181 2.625 12.183 2.625 11.7681V3.2369C2.625 2.82205 2.96016 2.4869 3.375 2.4869H17.468C17.6836 2.4869 17.8945 2.52908 18.0891 2.61346C19.2047 3.08924 19.9242 4.17908 19.9242 5.38846C19.9242 5.68377 19.882 5.9744 19.7977 6.25565C20.1914 6.77596 20.4094 7.41346 20.4094 8.07674C20.4094 8.37205 20.3672 8.66268 20.2828 8.94393C20.6766 9.46424 20.8945 10.1017 20.8945 10.765C20.8898 11.0603 20.8477 11.3533 20.7633 11.6346ZM4.3125 4.1744V10.8306H6.21094V4.1744H4.3125ZM19.2281 12.4478L18.7148 12.0025L19.0406 11.4072C19.148 11.2111 19.2036 10.9909 19.2023 10.7674C19.2023 10.3806 19.0336 10.0127 18.743 9.75955L18.2297 9.31424L18.5555 8.71893C18.6628 8.52283 18.7185 8.30263 18.7172 8.07908C18.7172 7.69236 18.5484 7.3244 18.2578 7.07127L17.7445 6.62596L18.0703 6.03065C18.1776 5.83454 18.2333 5.61435 18.232 5.3908C18.232 4.8658 17.9227 4.39236 17.4445 4.17674H7.71094V10.9056L10.043 19.3549C10.1031 19.5714 10.2322 19.7625 10.4107 19.8991C10.5891 20.0357 10.8073 20.1104 11.032 20.1119C11.2102 20.1119 11.3859 20.0603 11.5266 19.9549C11.7586 19.7814 11.8828 19.5189 11.8687 19.24L11.6437 14.59H19.0125C19.4297 14.3346 19.6875 13.9033 19.6875 13.4556C19.6875 13.0689 19.5188 12.7033 19.2281 12.4478Z"
      fill="#343A40"
    />
  </svg>
);
export default PostSection;
