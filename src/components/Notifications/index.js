import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import cn from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
export const Notification = ({
  imageSrc,
  userName,
  postCaption,
  postDate,
  postUrl,
  seen
}) => {
  const postCaptionSliced = postCaption.slice(0, 12);

  // for date formate
  const targetPostDate = dayjs(postDate);

  const onHandleClick = () => {
    window.open(`${window.location.href}posts/${postUrl}`, '_self');
  };
  return (
    <div
      className={cn(
        seen
          ? 'p-4 sm:p-8 shadow rounded-lg bg-white my-2 cursor-pointer'
          : 'p-4 sm:p-8 shadow-md rounded-lg bg-c100_op-10 bg-opacity-100 my-2 cursor-pointer'
      )}
      onClick={() => {
        onHandleClick();
      }}
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
          <time className="block text-xs text-c500">
            {targetPostDate.fromNow(true)}
          </time>
        </div>
      </div>
    </div>
  );
};
export const NotificationSection = ({ data }) => {
  return (
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
      {data &&
        data.map(({ _id, sender, createdAt, retrieved, entity }) => {
          return (
            <Notification
              data={data}
              key={_id}
              _id={_id}
              postCaption={entity && entity.caption ? entity.caption : 'Error'}
              postUrl={entity._id}
              seen={retrieved}
              postDate={createdAt}
              userName={sender && sender.name}
              // this will handle with a simple code when after clearing the users from backend
              imageSrc={
                sender && sender.userImage
                  ? sender.userImage
                  : 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'
              }
            />
          );
        })}
    </div>
  );
};
