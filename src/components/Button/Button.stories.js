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
          BUTTON_OPTIONS.backgroundColor.SecodaryBlack,
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
          BUTTON_OPTIONS.COLOR.C100,
          BUTTON_OPTIONS.COLOR.C200,
          BUTTON_OPTIONS.COLOR.C300,
          BUTTON_OPTIONS.COLOR.C400,
          BUTTON_OPTIONS.COLOR.C500,
          BUTTON_OPTIONS.COLOR.C600,
          BUTTON_OPTIONS.COLOR.C700,
          BUTTON_OPTIONS.COLOR.C800,
          BUTTON_OPTIONS.COLOR.C900,
          BUTTON_OPTIONS.COLOR.C1000,
          BUTTON_OPTIONS.COLOR.WHITE
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
  rounded: true,
  shadow: true,
  opacity: true
};
