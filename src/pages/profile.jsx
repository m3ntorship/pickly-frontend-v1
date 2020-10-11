import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { create } from 'axios';
import { useEffect } from 'react';
const API = create({
  baseURL: 'http://localhost:3001'
});

export const Profile = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  const [image, setImage] = useState('')
  useEffect(() => {
    if (user) {

      user.getIdToken().then((token)=> {
        return API({
          url: '/posts/5f7e16c20e66693bf9a36fbb',
          headers: {
            authorization: `bearer ${token}`
            // authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkYTc4NjNlODYzN2Q2NjliYzJhMTI2MjJjZWRlMmE4ODEzZDExYjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzNzU3NDcwMDQwMDktNXZuYW04azk4MjZ0b2JwZHVnbGxjN24zamY0ZGdvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzNzU3NDcwMDQwMDktNXZuYW04azk4MjZ0b2JwZHVnbGxjN24zamY0ZGdvbGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTA5NzUzODAxMTcxNDMzMTE0ODUiLCJlbWFpbCI6InNlaWZlbGRlZW4zMzg4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiS08zZHJHdGxpbEliTlBEay1Ob1dZZyIsIm5hbWUiOiJTYWlmLUFsZGluIElicmFoZW0iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2lUQk9tcVp6dzhpNWpQQWZUWXFNYXZlaVFYS2Riczl6OTV4bHBXPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlNhaWYtQWxkaW4iLCJmYW1pbHlfbmFtZSI6IklicmFoZW0iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTYwMjQzOTg5OSwiZXhwIjoxNjAyNDQzNDk5fQ.Q8jHScjhudxOY9aXC2O8mfvuRWlNvD8Y9yc21EmytS2R_LL69hAQXbvtZCWPmn_xlbybKhzvrXQHtLVhXNj0EocoNLFBR2r-wDCxyLzXHkVfGaebqO9Otgd2D9SigpU7KLLwsnzki5RSiAIDdj6VaKOfWy974m0ZXdc70nPFv7ZwdRzSWbbZIiJ5IOHGPiX93eJ7Utj2dP8OH19Kmh-0_a4BHMofS1oxqkh6DMUJmWqma03siYnLTYT9nM7-ptUcFDso0xrEpCa7OVaf9SyRsn7-bFYb-5wJCFbMl35tZqTZhSEbhGuReLFbzgSUqhfI3XJBjZzYBpGPdrOkpYPiZw`
          }
        }).then(({data: {data: {images: {images}}}}) => {
          setImage(images[0].url);
        })
      })

    }
  }, [user]);

  if (!user) {
    history.push('/login');
  }

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        history.push('/login');
      });
  };

  return (
    <div className="h-screen bg-c800">
      <h1>Hello, This is the home page</h1>
      <button
        className="p-5 text-c400 bg-white rounded-sm"
        onClick={() => {
          logOut();
        }}
      >
        Log Out

        <img src={image} alt='nile'/>
      </button>
    </div>
  );
};
