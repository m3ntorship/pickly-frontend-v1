import React from 'react';
import { NavLink } from 'react-router-dom';
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
    <div className="text-center md:text-right">
      <NavLink
        exact
        to="/"
        activeClassName="bg-c100_op-10 inline-block rounded-lg"
        activeStyle={{
          filter:
            'invert(64%) sepia(95%) saturate(7477%) hue-rotate(247deg) brightness(98%) contrast(90%)'
        }}
      >
        <Icon iconURL={navLinks[0]} className="inline-block md:mx-2 " />
      </NavLink>
      <NavLink
        to="/friends"
        activeClassName="bg-c100_op-10 inline-block rounded-lg"
        activeStyle={{
          filter:
            'invert(64%) sepia(95%) saturate(7477%) hue-rotate(247deg) brightness(98%) contrast(90%)'
        }}
      >
        <Icon iconURL={navLinks[1]} className="inline-block md:mx-2" />
      </NavLink>
      <NavLink
        to="/notifications"
        activeClassName="bg-c100_op-10 inline-block rounded-lg"
        activeStyle={{
          filter:
            'invert(64%) sepia(95%) saturate(7477%) hue-rotate(247deg) brightness(98%) contrast(90%)'
        }}
      >
        <Icon iconURL={navLinks[2]} className="inline-block md:mx-2" />
      </NavLink>
      <NavLink
        to="/profile"
        activeClassName="bg-c100_op-10 inline-block rounded-lg"
        activeStyle={{
          filter:
            'invert(64%) sepia(95%) saturate(7477%) hue-rotate(247deg) brightness(98%) contrast(90%)'
        }}
      >
        <Icon iconURL={navLinks[3]} className="inline-block md:mx-2" />
      </NavLink>
    </div>
  );
};

export const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="nav__container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-5 md:gap-y-0">
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
          <Navigation />
        </div>
      </div>
    </header>
  );
};
