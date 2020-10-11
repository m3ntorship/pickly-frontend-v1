import React from 'react';
import PostSection from './index';

export default {
  title: 'Components/PostSection',
  component: PostSection
};

const Template = args => <PostSection {...args} />;
export const PostSection = Template.bind({});
PostSection.args = {
  title: 'Someone Name',
  subTitle: 'Some sub title text comes here'
};
