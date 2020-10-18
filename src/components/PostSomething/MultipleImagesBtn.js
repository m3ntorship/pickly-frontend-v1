import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Button, BUTTON_OPTIONS } from '../Button';
import Icon from './Icon1.svg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const MultiBtn = () => {
  return (
    <Button
      shadow={true}
      isRounded={true}
      // padding={BUTTON_OPTIONS.PADDING.BIG}
      color={BUTTON_OPTIONS.BACKGROUND_COLOR.PrimaryBlack}
      className="flex flex-shrink py-3 px-6  md:px-12"
    >
      <i className="mr-3 hidden sm:block">
        <img src={Icon} alt="choose multi"></img>
      </i>
      <Heading
        textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
        // fontSize={HEADING_OPTIONS.FONT_SIZE.BASE}
        // fontWeight={HEADING_OPTIONS.FONT_WEIGHT.BOLD}
        lineHeight={HEADING_OPTIONS.LINE_HEIGHT.LOOSE}
        className="flex-auto text-xs sm:text-base font-medium sm:font-semibold "
      >
        Multiple images
      </Heading>
    </Button>
  );
};
