import { POSTS } from './postsClient';
import { NOTIFICATIONS } from './notificationsClient';

// YOU SHOULD MAKE SURE THAT METHOD NAMES
// ARE UNIQE ACROSS ALL CLIENTS!
export const PICKLY = {
  ...POSTS,
  ...NOTIFICATIONS
};
