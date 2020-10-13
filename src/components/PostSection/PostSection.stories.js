import React from 'react';
import PostSection from './index';

export default {
  title: 'Components/PostSection',
  component: PostSection
};

const Template = args => <PostSection {...args} />;

export const PostSectionCase = Template.bind({});
PostSectionCase.args = {
  title: 'Someone Profile',
  subTitle: 'simple subtitle here',
  imgURL:
    'https://images.unsplash.com/photo-1602494518630-f51bfa4e8853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  paragraph:
    'One of the perks of working in an international company is sharing knowledge with your colleagues.',
  bgImageOne:
    'https://images.unsplash.com/photo-1602432058111-9ee74ac7b683?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  bgImageTwo:
    'https://images.unsplash.com/photo-1602341612227-1612891401ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  divWidth: '50%',
  divHeight: '400px',
  smallRound: true,
  bgColor: 'white',
  pickIcon: 'http://www.svgshare.com/i/QUe.svg',
  searchIcon: 'https://i.imgur.com/inlBQ6A.png',
  options: [0]
};
