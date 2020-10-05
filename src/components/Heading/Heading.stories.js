import React from 'react';
import { Heading, HEADING_OPTIONS } from './index';

export default {
  title: 'Reusable Heading',
  component: Heading,
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: [
          HEADING_OPTIONS.FONT_SIZE.XLARGE,
          HEADING_OPTIONS.FONT_SIZE.LARGE,
          HEADING_OPTIONS.FONT_SIZE.MEDIUM,
          HEADING_OPTIONS.FONT_SIZE.SMALL,
          HEADING_OPTIONS.FONT_SIZE.XSMALL
        ]
      }
    },
    fontWeight: {
      control: {
        type: 'select',
        options: [
          HEADING_OPTIONS.FONT_WEIGHT.REGULAR,
          HEADING_OPTIONS.FONT_WEIGHT.MEDIUM,
          HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD,
          HEADING_OPTIONS.FONT_WEIGHT.BOLD
        ]
      }
    },
    lineHeight: {
      control: {
        type: 'select',
        options: [
          HEADING_OPTIONS.LINE_HEIGHT.TIGHT,
          HEADING_OPTIONS.LINE_HEIGHT.NORMAL,
          HEADING_OPTIONS.LINE_HEIGHT.LOOSE
        ]
      }
    },
    textAlign: {
      control: {
        type: 'select',
        options: [
          HEADING_OPTIONS.TEXT_ALIGN.LEFT,
          HEADING_OPTIONS.TEXT_ALIGN.CENTER,
          HEADING_OPTIONS.TEXT_ALIGN.RIGHT
        ]
      }
    },
    textColor: {
      control: {
        type: 'select',
        options: [
          HEADING_OPTIONS.FONT_COLOR.BLUE,
          HEADING_OPTIONS.FONT_COLOR.LIGHTBLACK,
          HEADING_OPTIONS.FONT_COLOR.DAWNBLACK,
          HEADING_OPTIONS.FONT_COLOR.CLOUDGREY,
          HEADING_OPTIONS.FONT_COLOR.SUBMARINEGREY,
          HEADING_OPTIONS.FONT_COLOR.WHITEGREY,
          HEADING_OPTIONS.FONT_COLOR.SILVERGREY,
          HEADING_OPTIONS.FONT_COLOR.OFFWHITE,
          HEADING_OPTIONS.FONT_COLOR.GREEN,
          HEADING_OPTIONS.FONT_COLOR.WHITE,
          HEADING_OPTIONS.FONT_COLOR.BLACK
        ]
      }
    }
  }
};

const Template = args => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Anonymous',
  fontSize: HEADING_OPTIONS.FONT_SIZE.LARGE,
  textAlign: HEADING_OPTIONS.TEXT_ALIGN.RIGHT,
  lessOpacity: true,
  textColor: HEADING_OPTIONS.FONT_COLOR.RED
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Heading',
  textColor: HEADING_OPTIONS.FONT_COLOR.LIGHT,
  fontSize: HEADING_OPTIONS.FONT_SIZE.MEDIUM,

  textAlign: HEADING_OPTIONS.TEXT_ALIGN.LEFT
};
export const Small = Template.bind({});
Small.args = {
  children: 'Small Heading',
  textColor: HEADING_OPTIONS.FONT_COLOR.SOLID,
  fontSize: HEADING_OPTIONS.FONT_SIZE.SMALL,
  textAlign: HEADING_OPTIONS.CENTER
};
export const Anonymous = Template.bind({});
Anonymous.args = {
  children: 'Anonymous Heading',
  textColor: HEADING_OPTIONS.FONT_COLOR.SOLID,
  fontSize: HEADING_OPTIONS.FONT_SIZE.SMALL,
  fontWeight: HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD,
  textAlign: HEADING_OPTIONS.CENTER,
  lineHeight: HEADING_OPTIONS.LINE_HEIGHT.LOOSE
};
