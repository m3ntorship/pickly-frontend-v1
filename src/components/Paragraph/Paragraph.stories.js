import React from 'react';
import { PARAGRAPH, PARAGRAPH_OPTIONS } from './index';

export default {
  title: 'Reusable PARAGRAPH',
  component: PARAGRAPH,
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: [
          PARAGRAPH_OPTIONS.FONT_SIZE.XLARGE,
          PARAGRAPH_OPTIONS.FONT_SIZE.LARGE,
          PARAGRAPH_OPTIONS.FONT_SIZE.MEDIUM,
          PARAGRAPH_OPTIONS.FONT_SIZE.SMALL,
          PARAGRAPH_OPTIONS.FONT_SIZE.XSMALL
        ]
      }
    },
    fontWeight: {
      control: {
        type: 'select',
        options: [
          PARAGRAPH_OPTIONS.FONT_WEIGHT.REGULAR,
          PARAGRAPH_OPTIONS.FONT_WEIGHT.MEDIUM,
          PARAGRAPH_OPTIONS.FONT_WEIGHT.SEMIBOLD,
          PARAGRAPH_OPTIONS.FONT_WEIGHT.BOLD
        ]
      }
    },
    lineHeight: {
      control: {
        type: 'select',
        options: [
          PARAGRAPH_OPTIONS.LINE_HEIGHT.TIGHT,
          PARAGRAPH_OPTIONS.LINE_HEIGHT.NORMAL,
          PARAGRAPH_OPTIONS.LINE_HEIGHT.LOOSE
        ]
      }
    },

    textColor: {
      control: {
        type: 'select',
        options: [
          PARAGRAPH_OPTIONS.FONT_COLOR.BLUE,
          PARAGRAPH_OPTIONS.FONT_COLOR.LIGHTBLACK,
          PARAGRAPH_OPTIONS.FONT_COLOR.DAWNBLACK,
          PARAGRAPH_OPTIONS.FONT_COLOR.CLOUDGREY,
          PARAGRAPH_OPTIONS.FONT_COLOR.SUBMARINEGREY,
          PARAGRAPH_OPTIONS.FONT_COLOR.WHITEGREY,
          PARAGRAPH_OPTIONS.FONT_COLOR.SILVERGREY,
          PARAGRAPH_OPTIONS.FONT_COLOR.OFFWHITE,
          PARAGRAPH_OPTIONS.FONT_COLOR.GREEN,
          PARAGRAPH_OPTIONS.FONT_COLOR.WHITE,
          PARAGRAPH_OPTIONS.FONT_COLOR.BLACK
        ]
      }
    }
  }
};

const Template = args => <PARAGRAPH {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Anonymous',
  fontSize: PARAGRAPH_OPTIONS.FONT_SIZE.LARGE,

  lessOpacity: true,
  textColor: PARAGRAPH_OPTIONS.FONT_COLOR.RED
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary PARAGRAPH',
  textColor: PARAGRAPH_OPTIONS.FONT_COLOR.LIGHT,
  fontSize: PARAGRAPH_OPTIONS.FONT_SIZE.MEDIUM
};
