import React from "react"
import {HeartIcon} from "./index"

export default {
    title: 'Components/HeartBtn',
    component: HeartIcon,
    argTypes: {
        voted: { control: 'boolean' },
        backgroundTrue :{control:"color"},
        backgroundFalse : {control:"color"},
      },
  };
  
  const Template = args => <HeartIcon {...args} />;
  
  export const HeartBtn = Template.bind({});
  HeartBtn.args = {
    voted:true,
    backgroundTrue:"red",
    backgroundFalse:"gray"
  };