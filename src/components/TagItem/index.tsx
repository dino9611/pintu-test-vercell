import React from 'react';

type TagItemProps = {
  data: string;
};

const TagItem: React.FC<TagItemProps> = ({ data }) => {
  return (
    <div className="bg-blue-100 whitespace-nowrap text-blue-800 text-sm font-semibold py-1 px-3 rounded-md">
      {data}
    </div>
  );
};

export default TagItem;
