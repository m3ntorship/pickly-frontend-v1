import React from 'react';
import { Heading } from './index';

export default {
  title: 'Heading/Showcases',
  component: Heading
};

const Template = args => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Heading',
  fontSize: 'lg'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Heading',
  textColor: 'light',
  fontSize: 'xlg',
  opacity: 'light',
  textAlign: 'left'
};
export const Small = Template.bind({});
Small.args = {
  children: 'Small Heading',
  textColor: 'light',
  fontSize: 'md',
  textAlign: 'left',
  opacity: 'light'
};
