import React, { useEffect, useState } from 'react';
import { Heading, HEADING_OPTIONS } from '../Heading';
import { Icon } from '../Navbar-icons';
import { NavLink } from 'react-router-dom';
import { PICKLY } from '../../apis/clients/pickly/';
import postIcon from './post-icon.svg';
import notifications from './notification.svg';
import notificationRed from './notification-red-circle.svg';

export const Navigation = () => {
  const [data, setData] = useState(true);
  // This useEffect() for fetching notifications data when the route load
  useEffect(() => {
    const interval = setInterval(() => {
      PICKLY.retriveNotification()
        .then(({ data }) => {
          setData(data.retrievedAll);
        })
        .catch(err => {});
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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
      iconUrl: data ? notifications : notificationRed,
      path: '/notifications'
    },

    {
      id: 4,
      iconUrl:
        'https://res.cloudinary.com/dhwuqox2w/image/upload/v1604434745/profile_j7qf7i.svg',
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
    <header className="pt-4 lg:pt-8 pb-2 md:bg-white">
      <div className="nav__container">
        <div className=" items-center grid grid-cols-2 md:grid-cols-4 justify-items-center md:justify-items-end">
          <div className="mt-1 sm:mt-0 md:justify-self-center justify-self-start col-start-1 col-end-2">
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
          <div className="col-start-2 md:col-end-4 hidden md:block md:justify-self-center">
            <Navigation />
          </div>
          <div className="md:justify-self-center justify-self-end">
            <NavLink exact to="/feedbacks">
              <button className="text-white bg-c1100 w-32 h-10  rounded-lg font-bold">
                Feedback?
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
