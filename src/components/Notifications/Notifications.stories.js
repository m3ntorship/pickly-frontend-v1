import React from 'react';
import { NotificationSection } from './index';

export default {
  title: 'sections/Notifications',
  component: NotificationSection
};

const Template = args => <NotificationSection {...args} />;

export const Notifications = Template.bind({});
NotificationSection.args = {};
