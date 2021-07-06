import React, { useEffect, useState } from 'react';

import PostSection from '../components/PostSection';
import { PICKLY } from '../apis/clients/pickly';
import PostLoader from '../components/LoadingComponents/PostLoader';

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const postsNum = 10;
  let pageNum = 1;

  // This useEffect() for fetching data when the route load

  useEffect(() => {
    setLoading(true);
    PICKLY.getAllPosts(pageNum, postsNum)
      .then(({ data }) => {
        setPosts(data.data);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });

    // Fetching data on Scroll
    const fetchNewPost = () => {
      setLoading(true);
      pageNum++;
      PICKLY.getAllPosts(pageNum, postsNum)
        .then(({ data }) => {
          setPosts(prevPosts => {
            return prevPosts.concat(data.data);
          });
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          setError(true);
        });
    };
    const scrollingEvent = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchNewPost();
      }
    };

    window.addEventListener('scroll', scrollingEvent);
    return () => window.removeEventListener('scroll', scrollingEvent);
  }, [pageNum]);

  // This useEffect for update the feed__when data value change
  useEffect(() => {}, [posts]);

  // taje the post id and pass the updated data to it__ will use in postSection component
  const updatePostData = (postId, updatedData) => {
    const foundPost = posts.findIndex(x => x._id === postId);
    let newData = [...posts];
    newData[foundPost] = updatedData;
    setPosts(newData);
  };

  return (
    <div className="bg-c900 py-6 overflow-hidden">
      <div className="container">
        {error && <ErrorComponent />}
        {posts &&
          posts.map(
            ({
              _id,
              author,
              caption,
              createdAt,
              isAnonymous,
              resources: { images },
              Voted,
              ownedByCurrentUser
            }) => {
              return (
                <PostSection
                  ownedByCurrentUser={ownedByCurrentUser}
                  data={posts}
                  setPosts={setPosts}
                  voted={Voted}
                  key={_id}
                  _id={_id}
                  images={images}
                  popupActionOptions={[0]}
                  postCaption={caption}
                  postDate={createdAt}
                  savesNumbers="0"
                  shareUrl={`${window.location.href}posts/${_id}`}
                  userName={author && author.name}
                  // this will handle with a simple code when after clearing the users from backend
                  userImage={
                    author && author.userImage
                      ? author.userImage
                      : 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'
                  }
                  isAnonymous={isAnonymous}
                  updatePostData={updatePostData}
                />
              );
            }
          )}
        {loading && <PostLoader />}
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
