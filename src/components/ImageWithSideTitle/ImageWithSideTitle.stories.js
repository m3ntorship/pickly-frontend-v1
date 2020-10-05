import React from 'react';
import ImageWithSideTitle from './index';

export default {
  title: 'ImageWithSideTitle',
  component: ImageWithSideTitle
};

const Template = args => <ImageWithSideTitle {...args} />;

export const ImgWithSideTitle = Template.bind({});
ImgWithSideTitle.args = {
  imgUrl: 'https://svgur.com/i/QGG.svg',
  title: 'Schedule'
};
