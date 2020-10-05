import React from 'react';

import { OptionsBtn } from './';

export default {
  title: 'components/options button',
  component: OptionsBtn
};

const Template = args => <OptionsBtn {...args} />;

export const unselected = Template.bind({});
unselected.args = {
  clicked: false
};
