import React from 'react';
import TagItem from '../TagItem';

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
        return <TagItem key={val} data={val} />;
      })}
    </div>
  );
};

export default TagSection;
