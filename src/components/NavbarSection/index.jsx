import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Icon } from '../Navbar-icons';

export const Navbar = () => {
  return (
    <div className="nav__container grid grid-cols-1 md:grid-cols-2">
      <div>
        <Heading
          as="h1"
          children="Pickly"
          fontSize={HEADING_OPTIONS.FONT_SIZE.LARGE}
          fontWeight={HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD}
          lineHeight={HEADING_OPTIONS.LINE_HEIGHT.NORMAL}
          textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
          textColor={HEADING_OPTIONS.FONT_COLOR.DAWNBLACK}
        />
      </div>
      <div></div>
    </div>
  );
};
