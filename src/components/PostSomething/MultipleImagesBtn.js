import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Button, BUTTON_OPTIONS } from '../Button';
import Icon from './Icon1.svg';
import 'reactjs-popup/dist/index.css';

export const MultiBtn = () => {
  return (
    <Button
      shadow={true}
      isRounded={true}
      color={BUTTON_OPTIONS.BACKGROUND_COLOR.PrimaryBlack}
      className="flex flex-shrink py-3 px-4  md:px-12"
    >
      <i className="mr-3 hidden sm:block">
        <img src={Icon} alt="choose multiple"></img>
      </i>
      <Heading
        textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
        fontWeight={HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD}
        lineHeight={HEADING_OPTIONS.LINE_HEIGHT.LOOSE}
        fontSize={HEADING_OPTIONS.FONT_SIZE.XSMALL}
        className="sm:text-base"
      >
        Multiple images
      </Heading>
    </Button>
  );
};
