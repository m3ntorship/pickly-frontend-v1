import React from 'react';

import { ProgressCircle } from './';

export default {
  title: 'components/UploadigProgress',
  component: ProgressCircle
};

const Template = args => <ProgressCircle {...args} />;

export const uploadigProgress = Template.bind({});
uploadigProgress.args = {
  progress: 40
};
