import React from 'react';
import NavLink from '../NavLink';

// type NavbarProps = {};

const Navbar: React.FC = () => {
  return (
    <nav className="h-[8vh] py-5  flex justify-between">
      <h1 className="font-bold text-2xl tracking-widest">PINTU</h1>
      <div className="space-x-20 hidden md:flex">
        <NavLink>Fitur</NavLink>
        <NavLink>PTU</NavLink>
        <NavLink>Edukasi</NavLink>
        <NavLink>Ikuti Kami</NavLink>
        <NavLink>Blog & News</NavLink>
        <div className="flex space-x-7">
          <NavLink>Karir</NavLink>
          <NavLink>🇮🇩 ID</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
