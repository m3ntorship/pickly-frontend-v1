import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Icon } from '../Navbar-icons';

// Icons Links
const navLinks = [
  'https://res.cloudinary.com/dqmuowojl/image/upload/v1601849139/icons/vzrzfrgclizafzzzjwml.svg',
  'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/dqx6nlqzgq2htwakja7b.svg',
  'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/uxm0ry0c9xwkz3zmooxv.svg',
  'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/cgafox7opgi6le1eomg4.svg'
];

const Navigation = () => {
  return (
    <div className="text-center md:text-right  col-start-1 col-end-4  md:col-start-2">
      <Icon exact to="/" iconURL={navLinks[0]} />
      <Icon to="/friends" iconURL={navLinks[1]} />
      <Icon to="/notifications" iconURL={navLinks[2]} />
      <Icon to="/profile" iconURL={navLinks[3]} />
    </div>
  );
};

export const Navbar = () => {
  return (
    <header className="bg-white lg:pt-8 pb-2">
      <div className="nav__container">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center  gap-y-5 md:gap-y-0">
          <div>
            <Heading
              as="h1"
              children="Pickly"
              fontSize={HEADING_OPTIONS.FONT_SIZE.LARGE}
              fontWeight={HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD}
              lineHeight={HEADING_OPTIONS.LINE_HEIGHT.NORMAL}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
              textColor={HEADING_OPTIONS.FONT_COLOR.DAWNBLACK}
              className="max-sm:text-xlg max-sm:text-center max-sm:mt-10  hidden md:block"
            />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};
