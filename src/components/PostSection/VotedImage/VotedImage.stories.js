import React from 'react';
import {VotedImage} from "./index"
export default {
  title: 'Components/VotedBtn',
  component: VotedImage,
};

const Template = args => <VotedImage {...args} />;

export const VotedImageBtn = Template.bind({});
VotedImageBtn.args = {
    id:"",
    voted:false
};
