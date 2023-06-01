import React from 'react';

type LayOutProps = {
  children: string | JSX.Element | JSX.Element[];
};

const Layout: React.FC<LayOutProps> = ({ children }) => {
  return <div className="xs:px-[2%] md:px-[15%]">{children}</div>;
};

export default Layout;
