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

const createSingleNotification = data => {
  return NOTIFICATIONS_CLIENT({
    method: 'post',
    url: notifications.resources.notifications,
    data
  });
};

export const NOTIFICATIONS = {
  getAllNotifications,
  createSingleNotification
};
