import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Icon } from '../Navbar-icons';

// Icons Links
const iconsLinks = [
  'https://res.cloudinary.com/dqmuowojl/image/upload/v1601849139/icons/vzrzfrgclizafzzzjwml.svg',
  'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/dqx6nlqzgq2htwakja7b.svg',
  'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/uxm0ry0c9xwkz3zmooxv.svg',
  'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/cgafox7opgi6le1eomg4.svg'
];

export const Navbar = () => {
  return (
    <header className=" shadow-lg">
      <div className="nav__container">
        <div className="py-2 grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 md:gap-y-0">
          <div>
            <Heading
              as="h1"
              children="Pickly"
              fontSize={HEADING_OPTIONS.FONT_SIZE.LARGE}
              fontWeight={HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD}
              lineHeight={HEADING_OPTIONS.LINE_HEIGHT.NORMAL}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
              textColor={HEADING_OPTIONS.FONT_COLOR.DAWNBLACK}
              className="max-sm:text-xlg max-sm:text-center max-sm:mt-10"
            />
          </div>
          <div className="text-center md:text-right">
            {iconsLinks.map((url, i) => (
              <Icon key={i} iconURL={url} className="inline-block md:mx-2" />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
