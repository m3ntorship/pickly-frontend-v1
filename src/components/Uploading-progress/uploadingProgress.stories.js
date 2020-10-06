import React from 'react';

import { UploadingProgress } from './';

export default {
  title: 'components/UploadigProgress',
  component: UploadingProgress
};

const Template = args => <UploadingProgress {...args} />;

export const uploadigProgress = Template.bind({});
uploadigProgress.args = {
  progress: 40
};
