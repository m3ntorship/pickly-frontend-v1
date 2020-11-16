import React from 'react';
import ConfirmationPopup from './';

export default {
  title: 'components/Confirmation Popup',
  component: ConfirmationPopup
};

const Template = args => <ConfirmationPopup {...args} />;
export const ConfirmPopup = Template.bind({});
ConfirmPopup.args = {
  title: 'Are you sure you want to delete post ?'
};
