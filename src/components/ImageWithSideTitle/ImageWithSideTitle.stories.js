import React from 'react';
import ImageWithSideTitle, { TITLE_COLOR } from './index';

export default {
  title: 'ImageWithSideTitle',
  component: ImageWithSideTitle,
  argTypes: {
    titleColor: {
      control: {
        type: 'select',
        options: [
          TITLE_COLOR.BLUE,
          TITLE_COLOR.RED,
          TITLE_COLOR.LIGHTBLACK,
          TITLE_COLOR.DAWNBLACK,
          TITLE_COLOR.CLOUDGREY,
          TITLE_COLOR.SUBMARINEGREY,
          TITLE_COLOR.WHITEGREY,
          TITLE_COLOR.SILVERGREY,
          TITLE_COLOR.OFFWHITE,
          TITLE_COLOR.GREEN,
          TITLE_COLOR.WHITE,
          TITLE_COLOR.BLACK
        ]
      }
    }
  }
};

const Template = args => <ImageWithSideTitle {...args} />;

export const ImgWithSideTitle = Template.bind({});
ImgWithSideTitle.args = {
  imgUrl: 'https://svgur.com/i/QGG.svg',
  title: 'Schedule',
  titleColor: TITLE_COLOR.BLUE,
  subTitle: 'simple subtitle here'
};
