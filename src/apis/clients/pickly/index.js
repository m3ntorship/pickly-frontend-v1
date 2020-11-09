import config from '../../../configs';
import { createClient } from '../../utils';

const {
  services: { posts }
} = config;

const POSTS_CLIENT = createClient(posts.host);

const getAllPosts = pageNum => {
  const numOfPosts = 5;
  return POSTS_CLIENT({
    url: `${posts.resources.posts}/?limit=${numOfPosts}&page=${pageNum}`
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
    .then(response => Promise.resolve(response)) //when notification feature is done
    .then(() => getPostById(postId));
};

const deletePost = postId => {
  return POSTS_CLIENT({
    method: 'delete',
    url: `${posts.resources.posts}/${postId}`
  });
};

export const PICKLY = {
  getAllPosts,
  createPost,
  getPostById,
  createVote,
  deletePost,
  createVoteAndRefetchPost
};
