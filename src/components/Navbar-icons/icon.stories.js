import React from 'react';
import PropTypes from 'prop-types';
// import dashBoard from './icons';
import { Icon } from './index';

export default {
  title: 'Component/Icons',
  component: Icon,
  argTypes: {
    bgColor: { control: 'color' },
    color: { control: 'color' }
  }
};

const Template = args => <Icon {...args} />;

export const UnSelectedIcon = Template.bind({});
UnSelectedIcon.args = {
  iconURL:
    'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/dqx6nlqzgq2htwakja7b.svg',
  bgColor: 'white',
  color: 'gray'
};

export const SelectedIcon = Template.bind({});
SelectedIcon.args = {
  iconURL:
    'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/varwu9dlnqnmelja6tqo.svg',
  bgColor: 'off white',
  color: 'blue'
};

// export const SelectedIcon = Template.bind({});
// SelectedIcon.args = {};
