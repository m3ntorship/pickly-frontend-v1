import React from 'react';
import {FeedbackForm} from "./index.js"


export default {
  title: 'pages/FeedbackForm',
  pages: FeedbackForm
};

const Template = args => <FeedbackForm {...args} />;

export const form = Template.bind({});
form.args = {};
