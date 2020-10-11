import React from 'react';

import { LoginForm } from './';

export default {
  title: 'pages/LoginForm',
  pages: LoginForm
};

const Template = args => <LoginForm {...args} />;

export const login = Template.bind({});
login.args = {};
