import React from 'react';
import { ReactSVG } from 'react-svg';
type CryptLogoProps = {
  url?: string;
  color?: string;
};

const CryptLogo: React.FC<CryptLogoProps> = ({ url, color }) => {
  if (!url) return null;
  return (
    <ReactSVG
      className="flex pl-3 md:pl-0 md:justify-center"
      src={url}
      beforeInjection={(svg) => {
        svg.setAttribute('height', '40');
        svg.setAttribute('width', '40');
        svg.setAttribute('style', `color: ${color};`);
      }}
    />
  );
};

export default CryptLogo;
