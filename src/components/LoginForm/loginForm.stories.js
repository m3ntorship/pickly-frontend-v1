import React from 'react';

import { LoginFormSection } from './';

export default {
  title: 'pages/LoginFormSection',
  pages: LoginFormSection
};

const Template = args => <LoginFormSection {...args} />;

export const login = Template.bind({});
login.args = {};
