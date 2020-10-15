import React from 'react';
import { InputField } from './index';

export default {
  title: 'components/InputField',
  component: InputField
};

const Template = args => <InputField {...args} />;

export const inputField = Template.bind({});
inputField.args = {
  imageURL:
    'https://res.cloudinary.com/dqmuowojl/image/upload/v1602084848/icons/pjuqygilrebcxnpgsp12.png',
  caption: ''
};
