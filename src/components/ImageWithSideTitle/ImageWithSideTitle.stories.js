import React from 'react';
import ImageWithSideTitle from './index';

export default {
  title: 'ImageWithSideTitle',
  component: ImageWithSideTitle
};

const Template = args => <ImageWithSideTitle {...args} />;

export const ImgWithSideTitle = Template.bind({});
ImgWithSideTitle.args = {
  iconURL: 'https://svgur.com/i/QGG.svg',
  title: 'Schedule',
  subTitle: 'simple subtitle here'
};

export const ImgWithSideTitleBtn = Template.bind({});
ImgWithSideTitleBtn.args = {
  iconURL: 'http://svgur.com/i/QHo.svg',
  title: 'Multiple images'
};

export const ImgWithSideTitleProfile = Template.bind({});
ImgWithSideTitleProfile.args = {
  imgURL:
    'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
  title: 'Someone Profile',
  subTitle: 'simple subtitle here',
  isImgRounded: true
};

export const ImgWithSideTitleAnonymous = Template.bind({});
ImgWithSideTitleAnonymous.args = {
  iconURL: 'http://svgur.com/i/QH6.svg',
  title: 'Anonymous',
  subTitle: 'simple subtitle here'
};
