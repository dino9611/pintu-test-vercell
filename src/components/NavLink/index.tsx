import React from 'react';

type NavLinkProps = {
  children: string | JSX.Element;
};

const NavLink: React.FC<NavLinkProps> = ({ children }) => {
  return <div className="text-lg">{children}</div>;
};

export default NavLink;
