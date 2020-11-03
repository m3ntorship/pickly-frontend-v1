import React from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Icon } from '../Navbar-icons';
import postIcon from './post-icon.svg';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  // Icons Links
  const navData = [
    {
      id: 1,
      iconUrl: postIcon,
      path: '/post'
    },
    {
      id: 2,
      iconUrl:
        'https://res.cloudinary.com/dhwuqox2w/image/upload/v1604339521/home_tswzsz.svg',
      path: '/',
      exact: true
    },

    {
      id: 3,
      iconUrl:
        'https://res.cloudinary.com/dhwuqox2w/image/upload/v1604339677/notifications_tw8i0k.svg',
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
    <div className="text-center lg:text-right flex justify-around px-4 md:px-0">
      {navData.map(({ id, iconUrl, path, exact }) => (
        <Icon key={id} iconURL={iconUrl} to={path} exact={exact} />
      ))}
    </div>
  );
};
export const Navbar = () => {
  return (
    <header className="bg-none pt-4 lg:pt-8 pb-2">
      <div className="nav__container">
        <div className=" items-center grid grid-cols-2 md:grid-cols-4 justify-items-center md:justify-items-end gap-y-4">
          <div className="md:justify-self-start mt-4 sm:mt-0 justify-self-center col-start-1 col-end-2">
            <NavLink exact to="/">
              <Heading
                as="h1"
                children="Pickly"
                fontWeight={HEADING_OPTIONS.FONT_WEIGHT.SEMIBOLD}
                fontSize={HEADING_OPTIONS.FONT_SIZE.LARGE}
                lineHeight={HEADING_OPTIONS.LINE_HEIGHT.NORMAL}
                textAlign={HEADING_OPTIONS.TEXT_ALIGN.LEFT}
                textColor={HEADING_OPTIONS.FONT_COLOR.DAWNBLACK}
              />
            </NavLink>
          </div>
          <div className="col-start-2 md:col-end-4 hidden md:block">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};
