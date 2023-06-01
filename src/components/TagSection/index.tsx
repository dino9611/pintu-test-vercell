import React from 'react';

const TAGS = [
  'Terbaru',
  'DeFi',
  'NFT/Gaming',
  'CEX',
  'DEX',
  'Layer-1',
  'Infrastructure',
  'Lending',
  'Layer-2',
  'Ekosistem Stable Coin',
];

const TagSection: React.FC = () => {
  return (
    <div className="my-5 flex space-x-4 overflow-scroll py-2">
      {TAGS.map((val) => {
        return (
          <div
            key={val}
            className="bg-blue-100 whitespace-nowrap text-blue-800 text-sm font-semibold py-1 px-3 rounded-md"
          >
            {val}
          </div>
        );
      })}
    </div>
  );
};

export default TagSection;
