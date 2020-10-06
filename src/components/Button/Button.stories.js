import React from 'react';
import { Button, BUTTON_OPTIONS } from './';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: [
          BUTTON_OPTIONS.backgroundColor.Transparent,
          BUTTON_OPTIONS.backgroundColor.Blue,
          BUTTON_OPTIONS.backgroundColor.Red,
          BUTTON_OPTIONS.backgroundColor.PrimaryBlack,
          BUTTON_OPTIONS.backgroundColor.SecondaryBlack,
          BUTTON_OPTIONS.backgroundColor.PrimaryGrey,
          BUTTON_OPTIONS.backgroundColor.SecondaryGrey,
          BUTTON_OPTIONS.backgroundColor.TertiaryGrey,
          BUTTON_OPTIONS.backgroundColor.QuaternaryGrey,
          BUTTON_OPTIONS.backgroundColor.OffWhite,
          BUTTON_OPTIONS.backgroundColor.Green,
          BUTTON_OPTIONS.backgroundColor.White
        ]
      }
    },
    color: {
      control: {
        type: 'select',
        options: [
          BUTTON_OPTIONS.COLOR.Blue,
          BUTTON_OPTIONS.COLOR.Red,
          BUTTON_OPTIONS.COLOR.PrimaryBlack,
          BUTTON_OPTIONS.COLOR.SecondaryBlack,
          BUTTON_OPTIONS.COLOR.PrimaryGrey,
          BUTTON_OPTIONS.COLOR.SecondaryGrey,
          BUTTON_OPTIONS.COLOR.TertiaryGrey,
          BUTTON_OPTIONS.COLOR.QuaternaryGrey,
          BUTTON_OPTIONS.COLOR.OffWhite,
          BUTTON_OPTIONS.COLOR.Green,
          BUTTON_OPTIONS.COLOR.White
        ]
      }
    },
    padding: {
      control: {
        type: 'select',
        options: [BUTTON_OPTIONS.PADDING.SMALL, BUTTON_OPTIONS.PADDING.BIG]
      }
    }
  }
};

const Template = args => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  isRounded: true,
  shadow: true,
  isOpacity: true
};
