import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';
import background from './bg_profile.jpg';
import { PICKLY } from '../apis/clients/pickly';
import PostSection from '../components/PostSection';
import PostLoader from '../components/LoadingComponents/PostLoader';

export const Profile = () => {
  const { user, logoutUser } = useContext(UserContext);
  const history = useHistory();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
    setLoading(true);
    PICKLY.getAllPosts()
      .then(({ data }) => {
        setPost(data.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, [user, history]);

  return (
    <div className="bg-c800 ">
      <div
        className="w-full  flex  items-end bg-center bg-cover "
        style={{
          backgroundImage: `url(${background})`,
          height: '40vh'
        }}
      >
        <div className="nav__container w-full h-full flex items-end ">
          <div className=" mb-4">
            <img
              src={user.photoURL}
              alt="profile"
              className="w-24 h-24 rounded-full border-white border-2 border-solid mr-3 border-white-1000"
            />
          </div>
          <div className="mt-4 pl-4 w-full grid grid-cols-2 mb-4">
            <h1 className="text-lg font-bold text-white">{user.displayName}</h1>
            <button
              className=" font-bold ml-2 mt-2 flex justify-end text-white"
              onClick={logoutUser}
            >
              <svg
                fill="white"
                id="Capa_1"
                enable-background="new 0 0 551.13 551.13"
                height="24"
                viewBox="0 0 551.13 551.13"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m499.462 0h-378.902c-9.52 0-17.223 7.703-17.223 17.223v51.668h34.446v-34.445h344.456v482.239h-344.456v-34.446h-34.446v51.668c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223v-516.684c0-9.52-7.704-17.223-17.223-17.223z" />
                <path d="m204.588 366.725 24.354 24.354 115.514-115.514-115.514-115.514-24.354 24.354 73.937 73.937h-244.079v34.446h244.08z" />
              </svg>
              Log out
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 nav__container">
        <p className=" font-bold">Your Posts</p>
      </div>
      <div className=" py-6" style={{ height: '100%' }}>
        <div className="nav__container ">
          {loading && <PostLoader />}
          {post &&
            post.map(
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
                    data={post}
                    setData={setPost}
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
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};
