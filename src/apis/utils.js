import { create } from 'axios';
import { auth } from 'firebase';

export const createClient = (baseURL, injectToken = true) => {
  const CLIENT = create({ baseURL });

  if (injectToken) {
    CLIENT.interceptors.request.use(
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
  }

  return CLIENT;
};
