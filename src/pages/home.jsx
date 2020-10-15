import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import PostSection from '../components/PostSection';
import { PostSomething } from '../components/PostSomething';
import { useHistory } from 'react-router-dom';
import { create } from 'axios';

const API = create({
  baseURL: 'http://localhost:3001'
});

export const Home = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  const [data, setData] = useState(null);
  const [postsIds, setPostsIds] = useState();

  useEffect(() => {
    API({
      url: '/posts',
      headers: {
        // authorization: `bearer ${token}`
        // authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkYTc4NjNlODYzN2Q2NjliYzJhMTI2MjJjZWRlMmE4ODEzZDExYjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzNzU3NDcwMDQwMDktNXZuYW04azk4MjZ0b2JwZHVnbGxjN24zamY0ZGdvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzNzU3NDcwMDQwMDktNXZuYW04azk4MjZ0b2JwZHVnbGxjN24zamY0ZGdvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTA5NzUzODAxMTcxNDMzMTE0ODUiLCJlbWFpbCI6InNlaWZlbGRlZW4zMzg4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiS08zZHJHdGxpbEliTlBEay1Ob1dZZyIsIm5hbWUiOiJTYWlmLUFsZGluIElicmFoZW0iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2lUQk9tcVp6dzhpNWpQQWZUWXFNYXZlaVFYS2Riczl6OTV4bHBXPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlNhaWYtQWxkaW4iLCJmYW1pbHlfbmFtZSI6IklicmFoZW0iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTYwMjQzOTg5OSwiZXhwIjoxNjAyNDQzNDk5fQ.Q8jHScjhudxOY9aXC2O8mfvuRWlNvD8Y9yc21EmytS2R_LL69hAQXbvtZCWPmn_xlbybKhzvrXQHtLVhXNj0EocoNLFBR2r-wDCxyLzXHkVfGaebqO9Otgd2D9SigpU7KLLwsnzki5RSiAIDdj6VaKOfWy974m0ZXdc70nPFv7ZwdRzSWbbZIiJ5IOHGPiX93eJ7Utj2dP8OH19Kmh-0_a4BHMofS1oxqkh6DMUJmWqma03siYnLTYT9nM7-ptUcFDso0xrEpCa7OVaf9SyRsn7-bFYb-5wJCFbMl35tZqTZhSEbhGuReLFbzgSUqhfI3XJBjZzYBpGPdrOkpYPiZw`
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
  }, []);

  const deleteAll = arr => {
    arr.forEach(id => {
      fetch(`http://localhost:3001/posts/${id}`, {
        method: 'delete'
      })
        .then(res => {
          console.log('deleted', res);
        })
        .catch(err => console.log(err));
    });
  };

  if (!user) {
    history.push('/login');
  }
  if (data) {
    return (
      <div className="bg-c700 py-10">
        <div className="container">
          <PostSomething />
          <button
            onClick={() => {
              deleteAll(postsIds);
            }}
          >
            Delete All
          </button>
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
