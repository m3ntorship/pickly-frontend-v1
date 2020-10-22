import React from 'react';
import { Button, BUTTON_OPTIONS } from './';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: [
          BUTTON_OPTIONS.BACKGROUND_COLOR.Transparent,
          BUTTON_OPTIONS.BACKGROUND_COLOR.Blue,
          BUTTON_OPTIONS.BACKGROUND_COLOR.Red,
          BUTTON_OPTIONS.BACKGROUND_COLOR.PrimaryBlack,
          BUTTON_OPTIONS.BACKGROUND_COLOR.SecondaryBlack,
          BUTTON_OPTIONS.BACKGROUND_COLOR.PrimaryGrey,
          BUTTON_OPTIONS.BACKGROUND_COLOR.SecondaryGrey,
          BUTTON_OPTIONS.BACKGROUND_COLOR.TertiaryGrey,
          BUTTON_OPTIONS.BACKGROUND_COLOR.QuaternaryGrey,
          BUTTON_OPTIONS.BACKGROUND_COLOR.OffWhite,
          BUTTON_OPTIONS.BACKGROUND_COLOR.Green,
          BUTTON_OPTIONS.BACKGROUND_COLOR.White
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
  children: 'Test Deploy',
  isRounded: true,
  shadow: true,
  isOpacity: false,
  backgroundColor: BUTTON_OPTIONS.BACKGROUND_COLOR.Blue,
  color: BUTTON_OPTIONS.COLOR.White,
  padding: BUTTON_OPTIONS.PADDING.BIG
};
