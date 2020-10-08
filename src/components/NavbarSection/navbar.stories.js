import React from 'react';
import { Navbar } from './';

export default {
  title: 'sections/Navbar',
  component: Navbar
};

export const NavbarShowcase = () => {
  return (
    <div className="h-screen bg-c900">
      <Navbar />
    </div>
  );
};
