import React from 'react';

import { TestComponent } from './';

export default {
  title: 'Test/Header',
  component: TestComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TestComponent {...args} />;


export const Section = Template.bind({});
Section.args = {
  title: "Test Title From Story"
};

export const Card = Template.bind({});
Card.args = {
    title: "Test Card Title From Story",
    fontSize: '14px'
  };




  