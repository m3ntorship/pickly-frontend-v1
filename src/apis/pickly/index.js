import { create } from 'axios';
import { auth } from 'firebase';
export const PICKLY = create({
  baseURL: 'http://localhost:3001'
});

PICKLY.interceptors.request.use(
  function (config) {
    return auth()
      .currentUser.getIdToken()
      .then(token => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
  },
  function (error) {
    return Promise.reject(error);
  }
);
