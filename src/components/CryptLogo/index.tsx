import React from 'react';
import { ReactSVG } from 'react-svg';
interface CryptLogoProps {
  url?: string;
  color?: string;
}

const CryptLogo: React.FC<CryptLogoProps> = ({ url, color }) => {
  if (!url) return null;
  return (
    <ReactSVG
      className=" flex justify-center "
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
