import React from 'react';
// import dashBoard from './icons';
import { Icon } from './index';

export default {
  title: 'Component/Icons',
  component: Icon
};

const Template = args => <Icon {...args} />;

export const DashboardIcon = Template.bind({});
DashboardIcon.args = {
  iconURL:
    'https://res.cloudinary.com/dqmuowojl/image/upload/v1601849139/icons/vzrzfrgclizafzzzjwml.svg'
};

export const FriendsIcon = Template.bind({});
FriendsIcon.args = {
  iconURL:
    'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/dqx6nlqzgq2htwakja7b.svg'
};


/**
 *  * dashbord icon link:
 *    https://res.cloudinary.com/dqmuowojl/image/upload/v1601849139/icons/vzrzfrgclizafzzzjwml.svg
 *
 *  * friends icon link
 *    https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/dqx6nlqzgq2htwakja7b.svg
 * 
 *  * notifcations icon link
 *    https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/uxm0ry0c9xwkz3zmooxv.svg
 * 
 *   * profile icon link
 *     https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/cgafox7opgi6le1eomg4.svg
 */