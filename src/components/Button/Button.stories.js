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
          BUTTON_OPTIONS.backgroundColor.C100,
          BUTTON_OPTIONS.backgroundColor.C200,
          BUTTON_OPTIONS.backgroundColor.C300,
          BUTTON_OPTIONS.backgroundColor.C400,
          BUTTON_OPTIONS.backgroundColor.C500,
          BUTTON_OPTIONS.backgroundColor.C600,
          BUTTON_OPTIONS.backgroundColor.C700,
          BUTTON_OPTIONS.backgroundColor.C800,
          BUTTON_OPTIONS.backgroundColor.C900,
          BUTTON_OPTIONS.backgroundColor.C1000,
          BUTTON_OPTIONS.backgroundColor.WHITE
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
