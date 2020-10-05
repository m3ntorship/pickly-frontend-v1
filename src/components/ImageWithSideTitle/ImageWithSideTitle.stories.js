import React from 'react';
import { ImageWithSideTitle, BG_COLOR } from './index';

export default {
  title: 'ImageWithSideTitle',
  component: ImageWithSideTitle,
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
        options: [
          BG_COLOR.BLUE,
          BG_COLOR.LIGHTBLACK,
          BG_COLOR.DAWNBLACK,
          BG_COLOR.CLOUDGREY,
          BG_COLOR.SUBMARINEGREY,
          BG_COLOR.WHITEGREY,
          BG_COLOR.SILVERGREY,
          BG_COLOR.OFFWHITE,
          BG_COLOR.GREEN,
          BG_COLOR.WHITE,
          BG_COLOR.BLACK
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
  subTitle: 'simple subtitle here'
};

export const ImgWithSideDarkTitle = Template.bind({});
ImgWithSideDarkTitle.args = {
  imgUrl: 'https://svgur.com/i/QGG.svg',
  title: 'Multiple images',
  titleColor: BG_COLOR.LIGHTBLACK,
  titleFontWeight: 'semibold',
  titleAlign: 'left'
};

export const ImgWithSideTitleWithBg = Template.bind({});
ImgWithSideTitleWithBg.args = {
  imgUrl: 'https://svgur.com/i/QGG.svg',
  title: 'Anonymous',
  titleColor: BG_COLOR.BLACK,
  subTitle: 'simple subtitle here',
  titleFontWeight: 'semibold',
  titleAlign: 'left',
  bgColor: BG_COLOR.SILVERGREY
};
