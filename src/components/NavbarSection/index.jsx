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
    <div className="text-center md:text-right md:col-start-2 md:col-end-4 ">
      <Icon exact to="/" iconURL={navLinks[0]} />
      <Icon to="/friends" iconURL={navLinks[1]} />
      <Icon to="/notifications" iconURL={navLinks[2]} />
      <Icon to="/profile" iconURL={navLinks[3]} />
    </div>
  );
};
export const Navbar = () => {
  return (
    <header className="bg-white pt-4 lg:pt-8 pb-2">
      <div className="nav__container">
        <div className=" items-center grid grid-cols-1 md:grid-cols-3 justify-items-center md:justify-items-end gap-y-4">
          <div className="md:justify-self-start mt-4 sm:mt-0 justify-self-center">
            <Heading
              as="h1"
              children="Pickly"
              fontWeight={HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD}
              fontSize={HEADING_OPTIONS.FONT_SIZE.LARGE}
              lineHeight={HEADING_OPTIONS.LINE_HEIGHT.NORMAL}
              textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
              textColor={HEADING_OPTIONS.FONT_COLOR.DAWNBLACK}
            />
          </div>

          <Navigation />
        </div>
      </div>
    </header>
  );
};
