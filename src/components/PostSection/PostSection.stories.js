import React from 'react';
import PostSection from './index';

export default {
  title: 'Components/PostSection',
  component: PostSection
};

export const Test = () => {
  return (
    <PostSection
      _id="52563"
      userName="Test"
      postDate="2020-10-18T13:33:27.102Z"
      userImage="https://images.unsplash.com/photo-1602524651876-b51552dc9929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      postCaption="Tset"
      images="lol"
      shareUrl="lol"
      savesNumbers={20}
      isAnonymous={true}
      voted={true}
      options={['Option 1', 'Option 2', 'Option 3']}
      positions="bottom left"
      appearOn="click"
      updateSinglePostData={() => {
        console.log('Test');
      }}
      images={[
        {
          name: 'nile',
          url:
            'https://res.cloudinary.com/elhaw/image/upload/v1603806693/temp/hl2sb2qtdhqh0qjge2yz.png',
          _id: '5f9825e61e930cfdc8738683'
        },
        {
          name: 'nile',
          url:
            'https://res.cloudinary.com/elhaw/image/upload/v1603806693/temp/cymzdl0fmja2i31kkoer.png',
          votes: {
            count: 1,
            _id: '5f9826191e930cfdc8738687',
            image: '5f9825e61e930cfdc8738684',
            updatedAt: '2020-10-27T13:52:25.728Z'
          },
          _id: '5f9825e61e930cfdc8738684'
        }
      ]}
    />
  );
};
