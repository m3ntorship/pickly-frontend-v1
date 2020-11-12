import config from '../../../configs';
import { createClient } from '../../utils';

const {
  services: { notifications }
} = config;

const NOTIFICATIONS_CLIENT = createClient(notifications.host);

const getAllNotifications = () => {
  return NOTIFICATIONS_CLIENT({
    url: notifications.resources.notifications
  });
};

const retriveNotification = () => {
  return NOTIFICATIONS_CLIENT({
    url: `${notifications.resources.notifications}/retrieved`
  });
};

const createSingleNotification = id => {
  return NOTIFICATIONS_CLIENT({
    method: 'post',
    url: notifications.resources.notifications,
    data: { id: id }
  });
};
const readNotification = _id => {
  return NOTIFICATIONS_CLIENT({
    method: 'patch',
    url: `${notifications.resources.notifications}/${_id}`
  });
};

export const NOTIFICATIONS = {
  getAllNotifications,
  createSingleNotification,
  readNotification,
  retriveNotification
};
