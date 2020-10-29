import React, { useEffect, useState} from 'react';
import ImageWithSideTitle from '../ImageWithSideTitle/index';
import { ReusableDiv } from '../DivWithCenterdChildren/index';
import { ShareBtn } from '../ShareBtn';
import { PICKLY } from '../../apis/clients';
import { HeartIcon } from './HeartIcon/index';
import cn from 'classnames';
import OptionsBtn from '../OptionsBtn';

const PostSection = ({
  _id,
  userName,
  postDate,
  userImage,
  postCaption,
  images,
  shareUrl,
  isAnonymous,
  voted,
  updatePostData,
  updateSinglePostData
}) => {
  const postComponentFixedAssets = {
    saveIcon: 'http://www.svgshare.com/i/QW7.svg',
    anonymousIcon: 'http://svgur.com/i/QH6.svg'
  };
  const { anonymousIcon } = postComponentFixedAssets;
  const [totalVotes, setTotalVotes] = useState(0);
  const [votedImage,setVotedImage]=useState(null)
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



  const handleVotePost=(id)=>{
    if(!votedImage){
    setVotedImage(id)}
  }





  const options = [
    {
      text: 'Text one',
      fun: () => {
        console.log('Test One');
      }
    },
    {
      text: 'Text Two',
      fun: () => {
        console.log('Test Two');
      }
    },
    {
      text: 'Text Three',
      fun: () => {
        console.log('Test Three');
      }
    }
  ];

  return (
    <div className="bg-white py-4 rounded-lg my-6 p-1">
      <div className="px-4 mx-auto flex justify-between items-center">
        <ImageWithSideTitle
          title={isAnonymous ? 'Anonymous' : userName}
          subTitle={`${dayIndex} ${monthName} at ${formatedHours}:${minutes} ${
            hours > 12 ? 'PM' : 'AM'
          }`}
          imgURL={userImage && !isAnonymous && userImage}
          iconURL={isAnonymous && anonymousIcon}
        />
        <OptionsBtn options={options} position="left top" />
      </div>
      <p className="px-4 mx-auto mt-5 text-sm font-regular">
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
                      alt=""
                      onDoubleClick={() => {
                        handleVote(img._id, voted, _id);
                      }}
                    />
                  </div>
                  <div onClick={(id)=>handleVotePost(img._id)} className="group absolute w-full h-full shadow-outline	 md:flex md:justify-center md:items-center hover:bg-red-900 md:block sm:hidden">
                    <div className={`hidden bg-white rounded-full h-16 w-16 justify-center items-center ease-in-out group-hover:flex `}>
                      <HeartIcon color="red" voted={img._id===votedImage?true:false}/>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex items-center justify-between px-4 mx-auto">
        <div className="flex items-center">
          <div className="flex  text-sm justify-around text-c300">
            <HeartIcon voted={voted} color="gray"/>
            <span className="ml-1 md:ml-2 text-xs md:text-base">
              {totalVotes && totalVotes} Votes
            </span>
          </div>
          {/* 
          <div className="flex text-sm justify-around text-c300 ml-4 lg:ml-6 ">
            <img src={saveIcon} alt="" className="w-3 md:w-4" />
            <span className="ml-1 md:ml-3 text-xs md:text-base mt-1">
              {savesNumbers && savesNumbers} Saved
            </span>
          </div> */}
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
