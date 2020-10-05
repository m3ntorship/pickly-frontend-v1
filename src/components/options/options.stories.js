import React from 'react';

import PopUp from './';

const APPEAR_ON_OPTIONS = ['click', 'hover', 'right-click'];

const POSITION_TYPES = [
  'top left',
  'top center',
  'top right',
  'right top',
  'right center',
  'right bottom',
  'bottom left',
  'bottom center',
  'bottom right',
  'left top',
  'left center',
  'left bottom',
  'center center'
];

export default {
  title: 'components/Pop up',
  component: PopUp,
  argTypes: {
    appearOn: {
      control: {
        type: 'select',
        options: [...APPEAR_ON_OPTIONS]
      }
    },
    position: {
      control: {
        type: 'select',
        options: [...POSITION_TYPES]
      }
    }
  }
};

const Template = args => <PopUp {...args} />;

export const test = Template.bind({});
test.args = {
  options: ['option1', 'option2', 'option3']
};
