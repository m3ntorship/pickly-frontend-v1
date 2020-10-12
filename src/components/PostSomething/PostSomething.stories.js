import React from 'react';

import { PostSomething } from './index';

export default {
  title: 'PostSomething',
  component: PostSomething
};

const Template = args => <PostSomething {...args} />;

export const Post = Template.bind({});
