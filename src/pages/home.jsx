import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import PostSection from '../components/PostSection';
import { PostSomething } from '../components/PostSomething';
import { PICKLY } from '../apis/pickly/index';
import { create } from 'axios';
import PostLoader from '../components/LoadingComponents/PostLoader';
import CreatePostButton from '../components/CreatePostButon';

export const Home = () => {
  const { token } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    PICKLY.get('/posts')
      .then(({ data }) => {
        setData(data.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }, [token]);

  return (
    <div className="bg-c900 py-6">
      <div className="container">
        <CreatePostButton />
        {loading && <PostLoader />}
        {error && <ErrorComponent />}
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
                  userName={author && author.name}
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

const ErrorComponent = () => {
  return (
    <div
      className="bg-c900 border border-c200 text-c200 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Sorry!</strong>
      <span className="block sm:inline ml-2">Can't find your data.</span>
    </div>
  );
};
