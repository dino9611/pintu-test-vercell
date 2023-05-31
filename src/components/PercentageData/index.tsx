import React from 'react';

type PercentageProps = {
  data?: number;
};

const PercentageData: React.FC<PercentageProps> = ({ data }) => {
  const colorText = (numb?: number) => {
    if (numb) return numb > 0 ? 'text-green-500' : 'text-red-500';
    return 'text-inherit';
  };
  return <td className={colorText(data)}>{data + ' %'}</td>;
};

export default PercentageData;
