import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Button, BUTTON_OPTIONS } from '../Button';
import Icon2 from './Icon2.svg';

export const OneImageBtn = () => {
  return (
    <Button
      shadow={true}
      isRounded={true}
      // padding={BUTTON_OPTIONS.PADDING.SMALL}
      color={BUTTON_OPTIONS.BACKGROUND_COLOR.PrimaryBlack}
      className="flex flex-shrink ml-2 py-3 px-6  md:px-12"
    >
      <i className="mr-3 flex-none">
        <img src={Icon2} alt="choose one"></img>
      </i>
      <Heading
        textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
        // fontSize={HEADING_OPTIONS.FONT_SIZE.BASE}
        // fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
        lineHeight={HEADING_OPTIONS.LINE_HEIGHT.LOOSE}
        className="flex-auto text-xs sm:text-base font-medium sm:font-bold "
      >
        One Image
      </Heading>
    </Button>
  );
};
