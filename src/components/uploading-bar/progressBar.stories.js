import React from 'react';

import { ProgressBar } from './';

export default {
  title: 'components/ProgressBar',
  component: ProgressBar
};

const Template = args => <ProgressBar {...args} />;

export const uploadigProgressBar = Template.bind({});
uploadigProgressBar.args = {
  size: 300,
  progress: 50,
  strokeWidth: 50,
  circleOneStroke: '#6741D9',
  circleTwoStroke: '#6741D9'
};
