import React from 'react';
import PostSection from './index';

export default {
  title: 'Components/PostSection',
  component: PostSection,
  argTypes: {
    voted: { control: 'boolean' },
  },
};

export const Test = () => {
  return (
    <div className="bg-c700 h-screen">
      <div className="container my-10">
        <PostSection
          _id="52563"
          userName="Test"
          postDate="2020-10-18T13:33:27.102Z"
          userImage="https://images.squarespace-cdn.com/content/v1/57053e3059827e7cad776789/1523459682356-NJ4FVBDNR0TD15F4FLV3/ke17ZwdGBToddI8pDm48kB6N0s8PWtX2k_eW8krg04V7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URWK2DJDpV27WG7FD5VZsfFVodF6E_6KI51EW1dNf095hdyjf10zfCEVHp52s13p8g/017-Portrait-Photography-Manchester.jpg"
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
      </div>
    </div>
  );
};
