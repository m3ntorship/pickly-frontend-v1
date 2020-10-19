import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import PostSection from '../components/PostSection';
import { PostSomething } from '../components/PostSomething';
import { create } from 'axios';

const API = create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export const Home = props => {
  const { token } = useContext(UserContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    API({
      url: '/posts',
      headers: {
        authorization: `bearer ${token}`
      }
    }).then(({ data }) => {
      setData(data.data);
    });
  }, [token]);

  return (
    <div className="bg-c900 py-6">
      <div className="container">
        <PostSomething />
        {data &&
          data.map(
            ({
              _id,
              author,
              caption,
              createdAt,
              isAnonymous,
              resources: { images }
            }) => {
              return (
                <PostSection
                  key={_id}
                  leftBgImage={images[0].url}
                  rightBgImage={images[1].url}
                  popupActionOptions={[0]}
                  postCaption={caption}
                  postDate={createdAt}
                  savesNumbers="0"
                  shareUrl="https://www.m3ntorship.com"
                  userImage="https://images.unsplash.com/photo-1602494518630-f51bfa4e8853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  userName={author.name}
                  votesNumbers="0"
                  isAnonymous={isAnonymous}
                />
              );
            }
          )}
      </div>
    </div>
  );
};
