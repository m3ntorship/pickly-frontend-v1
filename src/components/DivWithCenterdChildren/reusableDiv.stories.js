import React from 'react';
import { ReusableDiv } from './';

export default {
  title: 'components/Reusable Div',
  component: ReusableDiv
};

export const TestOne = () => {
  return (
    <ReusableDiv bgColor="c200" divWidth="300px" divHeight="400px">
      Hi Iam Centerd Content
    </ReusableDiv>
  );
};
