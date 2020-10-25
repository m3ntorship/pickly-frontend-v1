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

const createPost = data => {
  return POSTS_CLIENT({
    method: 'post',
    url: posts.resources.posts,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
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
    url: `${posts.resources.images}/${imageId}/votes`
  });
};

const createVoteAndRefetchPost = (imageId, postId) => {
  return createVote(imageId)
  .then((response) => Promise.resolve(response)) //when notification feature is done
  .then(() => getPostById(postId));
};

export const PICKLY = {
  getAllPosts,
  createPost,
  getPostById,
  createVote,
  createVoteAndRefetchPost
};
