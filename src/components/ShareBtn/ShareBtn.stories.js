import React from 'react';
import { ShareBtn } from './index';

export default {
  title: 'components/ShareBtn',
  component: ShareBtn
};
const Template = args => <ShareBtn {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  url: 'https://www.m3ntorship.com'
};
