export default {
  services: {
    posts: {
      host: process.env.REACT_APP_POSTS_SERVICE_URL,
      resources: {
        posts: '/posts',
        votes: '/votes',
        feedback:'/feedbacks'
      }
    },
    notifications: {
      host: process.env.REACT_APP_NOTIFICATIONS_SERVICE_URL,
      resources: {
        notifications: '/notifications',
      }
    }
  }
};
