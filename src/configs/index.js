export default {
  services: {
    posts: {
      host: process.env.REACT_APP_POSTS_SERVICE_URL,
      resources: {
        posts: '/posts',
        images: '/images'
      }
    }
  }
}