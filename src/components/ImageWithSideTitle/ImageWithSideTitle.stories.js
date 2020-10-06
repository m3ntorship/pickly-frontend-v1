import React from 'react';
import ImageWithSideTitle from './index';

export default {
  title: 'components/ImageWithSideTitle',
  component: ImageWithSideTitle
};

const Template = args => <ImageWithSideTitle {...args} />;

export const ImgWithSideTitle = Template.bind({});
ImgWithSideTitle.args = {
  iconURL: 'https://svgur.com/i/QGG.svg',
  title: 'Schedule',
  subTitle: 'simple subtitle here'
};

export const ImgWithSideDarkTitle = Template.bind({});
ImgWithSideDarkTitle.args = {
  iconURL: 'http://svgur.com/i/QHo.svg',
  title: 'Multiple images'
};

export const ImgWithSideTitleWithBg = Template.bind({});
ImgWithSideTitleWithBg.args = {
  imgURL:
    'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
  title: 'Anonymous',
  subTitle: 'simple subtitle here',
  isImgRounded: true
};

export const ImgWithSideTitleWithoutImg = Template.bind({});
ImgWithSideTitleWithoutImg.args = {
  iconURL: 'http://svgur.com/i/QH6.svg',
  title: 'Anonymous',
  subTitle: 'simple subtitle here'
};
