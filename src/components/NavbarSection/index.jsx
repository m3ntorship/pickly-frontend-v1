import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Icon } from '../Navbar-icons';

const Navigation = () => {
  // Icons Links
  const navData = [
    {
      id: 1,
      iconUrl:
        'https://res.cloudinary.com/dqmuowojl/image/upload/v1601849139/icons/vzrzfrgclizafzzzjwml.svg',
      path: '/',
      exact: true
    },
    {
      id: 2,
      iconUrl:
        'https://res.cloudinary.com/dqmuowojl/image/upload/v1601833247/icons/dqx6nlqzgq2htwakja7b.svg',
      path: '/friends'
    },
    {
      id: 3,
      iconUrl:
        'https://res.cloudinary.com/dqmuowojl/image/upload/v1601849139/icons/uxm0ry0c9xwkz3zmooxv.svg',
      path: '/notifications'
    },
    {
      id: 4,
      iconUrl:
        'https://res.cloudinary.com/dqmuowojl/image/upload/v1601849139/icons/cgafox7opgi6le1eomg4.svg',
      path: '/profile'
    }
  ];
  return (
    <div className="text-center md:text-right md:col-start-2 md:col-end-4 ">
      {navData.map(({ id, iconUrl, path, exact }) => (
        <Icon key={id} iconURL={iconUrl} to={path} exact={exact} />
      ))}
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
