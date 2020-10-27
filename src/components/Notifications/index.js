import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import cn from 'classnames';
export const Notification = ({
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
            className="w-12 h-12 rounded-full mr-4 max-w-none object-cover"
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
export const NotificationSection = () => {
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
          imageSrc="https://source.unsplash.com/random"
          userName="Eslam Hesham"
          postTime={`2 days ago`}
          postCaption="hi there byeys"
          seen={true}
        />
        <Notification
          imageSrc="https://source.unsplash.com/random"
          userName="Eslam Hesham"
          postTime={`2 days ago`}
          postCaption="hi there byeys"
          seen={false}
        />
      </div>
    </div>
  );
};
