import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';
import { Heading, HEADING_OPTIONS } from '../components/Heading';
import cn from 'classnames';

export const Notifications = ({ postDate }) => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  // date
  // const date = new Date(postDate);
  // const monthName = months[date.getMonth()];
  // const dayIndex = date.getDate();
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const formatedHours = ((hours + 11) % 12) + 1;
  console.log(user);
  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  });

  const Notification = ({
    imageSrc,
    userName,
    postCaption,
    postTime,
    postUrl,
    seen
  }) => {
    const postCaptionSliced = postCaption.slice(0, 8);
    return (
      <div
        className={cn(
          seen
            ? 'p-4 sm:p-8 shadow rounded-lg bg-white my-2 cursor-pointer'
            : 'p-4 sm:p-8 shadow-md rounded-lg bg-c100_op-10 bg-opacity-100 my-2 cursor-pointer'
        )}
        postUrl={postUrl}
      >
        <div className="flex items-center">
          <figure>
            <img
              alt="profile"
              src={imageSrc}
              className="w-12 h-12 rounded-full mr-4 max-w-none"
            />
          </figure>
          <div>
            <p>
              <span className="font-bold">{`${userName} `}</span>
              voted on your post {`"${postCaptionSliced}"`}
            </p>
            <time className="block text-xs text-c500">{postTime}</time>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className=" h-screen ">
      <div className="nav__container ">
        <Heading
          as="h1"
          children="Notifications"
          fontWeight={HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD}
          fontSize={HEADING_OPTIONS.FONT_SIZE.LARGE}
          lineHeight={HEADING_OPTIONS.LINE_HEIGHT.NORMAL}
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
          textColor={HEADING_OPTIONS.FONT_COLOR.DAWNBLACK}
          className="py-6"
        />
        <Notification
          imageSrc={user.photoURL}
          userName={user.displayName}
          postTime={`2 days ago`}
          postCaption="hi there bye"
          seen={false}
        />
        <Notification
          imageSrc={user.photoURL}
          userName={user.displayName}
          postTime={`2 days ago`}
          postCaption="hi there bye"
          seen={true}
        />
        <Notification
          imageSrc={user.photoURL}
          userName={user.displayName}
          postTime={`2 days ago`}
          postCaption="hi there bye"
          seen={false}
        />
        <Notification
          imageSrc={user.photoURL}
          userName={user.displayName}
          postTime={`2 days ago`}
          postCaption="hi there bye"
          seen={true}
        />
      </div>
    </div>
  );
};
