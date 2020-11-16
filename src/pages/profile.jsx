import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';
import background from './bg_profile.jpg';
import { PICKLY } from '../apis/clients/pickly';

export const Profile = () => {
  const { user, logoutUser } = useContext(UserContext);
  const history = useHistory();
  const [post, setPosts] = useState(null);
  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
    PICKLY.getAllPosts()
      .then(({ data }) => {
        setPosts(data.data);
        console.log(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [user, history]);

  return (
    <div className="h-screen bg-c800 ">
      <div
        className="w-full  flex  items-end bg-center bg-cover"
        style={{
          backgroundImage: `url(${background})`,
          height: '40vh'
        }}
      >
        <div className="nav__container w-full h-full flex items-end">
          <div className="mt-12 ml-4 ">
            <img
              src={user.photoURL}
              alt="profile"
              className="w-24 h-24 rounded-full border-white border-2 border-solid mr-3 border-white-1000"
            />
          </div>
          <div className="mt-4 pl-4">
            <h1 className="text-lg font-bold text-white">
              {/* {user.displayName} */}
              Mu'taz Alaa
            </h1>
            <button className=" font-bold ml-2 mt-2" onClick={logoutUser}>
              <svg
                fill="white"
                id="Capa_1"
                enable-background="new 0 0 551.13 551.13"
                height="20"
                viewBox="0 0 551.13 551.13"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m499.462 0h-378.902c-9.52 0-17.223 7.703-17.223 17.223v51.668h34.446v-34.445h344.456v482.239h-344.456v-34.446h-34.446v51.668c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223v-516.684c0-9.52-7.704-17.223-17.223-17.223z" />
                <path d="m204.588 366.725 24.354 24.354 115.514-115.514-115.514-115.514-24.354 24.354 73.937 73.937h-244.079v34.446h244.08z" />
              </svg>{' '}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 nav__container font-bold grid grid-cols-2 justify-items-center">
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-c1100">{post?post.length:"0"}</p>
          <h2>Posts</h2>
        </div>
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-c1100">80</p>
          <h2>comments</h2>
        </div>
      </div>
      <div className="mt-4 nav__container">
        <p className=" font-bold">Activity</p>
        <hr />
      </div>
      <div className="mt-4 nav__container">
        {
          post?post.map(item=>{
            return(
              <>



              </>
            )
          })
        :null}
      </div>

    </div>
  );
};
