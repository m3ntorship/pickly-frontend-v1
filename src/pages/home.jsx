import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import PostSection from '../components/PostSection';
import { PostSomething } from '../components/PostSomething';
import { Redirect, useHistory } from 'react-router-dom';
import { create } from 'axios';

const API = create({
  baseURL: 'http://localhost:3001'
});

export const Home = () => {
  const { user, token } = useContext(UserContext);
  const history = useHistory();
  const [data, setData] = useState(null);
  const [postsIds, setPostsIds] = useState();

  useEffect(() => {
    if (user) {
      API({
        url: '/posts',
        headers: {
          authorization: `bearer ${token}`
        }
      }).then(({ data }) => {
        console.log(data.data);
        let idArr = [];
        data.data.map(({ _id }) => {
          idArr.push(_id);
        });
        setPostsIds(idArr);
        setData(data.data);
      });
    }
  }, [user]);

  // const deleteAll = arr => {
  //   arr.forEach(id => {
  //     fetch(`http://localhost:3001/posts/${id}`, {
  //       method: 'delete'
  //     })
  //       .then(res => {
  //         console.log('deleted', res);
  //       })
  //       .catch(err => console.log(err));
  //   });
  // };

  if (data) {
    return (
      <div className="bg-c900 py-6">
        <div className="container">
          <PostSomething />
          {/* <button
            onClick={() => {
              deleteAll(postsIds);
            }}
          >
            Delete All
          </button> */}
          {data.map(
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
                />
              );
            }
          )}
        </div>
      </div>
    );
  } else {
    return '....Loading';
  }
};
