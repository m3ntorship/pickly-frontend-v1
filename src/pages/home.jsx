import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import PostSection from '../components/PostSection';
import { PICKLY } from '../apis/clients/pickly';
import PostLoader from '../components/LoadingComponents/PostLoader';
import CreatePostButton from '../components/CreatePostButon';

export const Home = () => {
  const { token } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // This useEffect() for fetching data when the route load
  useEffect(() => {
    setLoading(true);
    PICKLY.getAllPosts()
      .then(({ data }) => {
        setData(data.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }, [token]);

  // This useEffect for update the feed__when data value change
  useEffect(() => {
    console.log('Data changed');
  }, [data]);

  // taje the post id and pass the updated data to it__ will use in postSection component
  const updatePostData = (postId, updatedData) => {
    const foundPost = data.findIndex(x => x._id === postId);
    let newData = [...data];
    newData[foundPost] = updatedData;
    setData(newData);
  };

  // Just for test__ loop on the data and delete all the posts from the database
  const deleteAll = () => {
    setData(null);
    for (let el of data) {
      PICKLY.deletePost(el._id).then(res => console.log('deleted'));
    }
  };

  console.log(data);

  return (
    <div className="bg-c900 py-6">
      <div className="container">
        <button
          className="bg-c200 py-2 px-4 block text-white"
          onClick={deleteAll}
        >
          Delete All Posts
        </button>
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
              resources: { images },
              Voted
            }) => {
              return (
                <PostSection
                  voted={Voted}
                  key={_id}
                  _id={_id}
                  leftImage={images[0]}
                  rightImage={images[1]}
                  popupActionOptions={[0]}
                  postCaption={caption}
                  postDate={createdAt}
                  savesNumbers="0"
                  shareUrl="https://www.m3ntorship.com"
                  userImage="https://images.unsplash.com/photo-1602494518630-f51bfa4e8853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  userName={author && author.name}
                  votesNumbers="0"
                  isAnonymous={isAnonymous}
                  updatePostData={updatePostData}
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
