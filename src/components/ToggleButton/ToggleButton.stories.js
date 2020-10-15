import React from 'react';
// import dashBoard from './icons';
import { ToggleButton } from './index';

export default {
  title: 'components/ToggleButton',
  component: ToggleButton
};

const Template = args => <ToggleButton {...args} />;

export const toggleButton = Template.bind({});
toggleButton.args = {
  title: 'Post anonymously',
  selected: false,
  toggleSelected: isOn => {
    isOn && console.log('ON');
  }
};
