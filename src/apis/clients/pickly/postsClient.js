import config from '../../../configs';
import { createClient } from '../../utils';

const {
  services: { posts }
} = config;

const POSTS_CLIENT = createClient(posts.host);

const getAllPosts = () => {
  return POSTS_CLIENT({
    url: posts.resources.posts
  });
};

const createPost = (data, onUploadProgress) => {
  return POSTS_CLIENT({
    method: 'post',
    url: posts.resources.posts,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data,
    onUploadProgress: onUploadProgress
  });
};

const sendFeedback = data => {
  return POSTS_CLIENT({
    method: 'post',
    url: posts.resources.feedback,
    // url:`https://api.mocki.io/v1/c801b325`,
    data
  });
};
const getGategories = () => {
  return POSTS_CLIENT({
    method: 'get',
    url: `${posts.resources.feedback}/categories`
    // url:`https://api.mocki.io/v1/c7efe600`
  });
};

const getPostById = postId => {
  return POSTS_CLIENT({
    url: `${posts.resources.posts}/${postId}`
  });
};

// votes
const createVote = imageId => {
  return POSTS_CLIENT({
    method: 'put',
    url: `${posts.resources.votes}/${imageId}`
  });
};

const createVoteAndRefetchPost = (imageId, postId) => {
  return createVote(imageId)
    .then(response => Promise.resolve(response)) //when notification feature is done
    .then(() => getPostById(postId));
};

const deletePost = postId => {
  return POSTS_CLIENT({
    method: 'delete',
    url: `${posts.resources.posts}/${postId}`
  });
};

export const POSTS = {
  getAllPosts,
  createPost,
  getPostById,
  createVote,
  deletePost,
  sendFeedback,
  getGategories,
  createVoteAndRefetchPost
};
