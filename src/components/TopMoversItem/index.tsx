import React from 'react';
import { IMergeData } from 'src/hooks';
import CryptLogo from 'src/components/CryptLogo';
import { formatRupiah } from 'src/utils/formatRp';
import PercentageData from '../PercentageData';

type TopMoversItemProps = {
  data?: IMergeData;
};

const TopMoversItem: React.FC<TopMoversItemProps> = ({ data }) => {
  return (
    <div
      aria-label={data?.name}
      className="md:w-1/6 xs:w-1/2 p-3 hover:bg-gray-100 "
    >
      <div className="flex w-[138px] space-x-2">
        <CryptLogo url={data?.logo} color={data?.color} />
        <div className=" font-bold text-lg truncate">{data?.name}</div>
      </div>
      <div className="my-2">{formatRupiah(data?.latestPrice)}</div>
      <PercentageData
        data={data?.day}
        tag="div"
        className="text-2xl font-bold"
      />
    </div>
  );
};

export default TopMoversItem;
