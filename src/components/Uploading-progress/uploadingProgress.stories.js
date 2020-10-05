import React from 'react';

import { UploadingProgress } from './';

export default {
  title: 'component/UploadigProgress',
  component: UploadingProgress
};

const Template = args => <UploadingProgress {...args} />;

export const uploadigProgress = Template.bind({});
uploadigProgress.args = {
  progress: 3
};
