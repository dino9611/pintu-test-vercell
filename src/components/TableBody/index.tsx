import React from 'react';
import { ChangePrice, IMergeData, useMergedata } from 'src/hooks';
import { formatRupiah } from 'src/utils/formatRp';
import PercentageData from 'src/components/PercentageData';
import CryptLogo from 'src/components/CryptLogo';

interface TableBodyProps {
  filter: string;
}

const TableBody: React.FC<TableBodyProps> = ({ filter }) => {
  const { mergeData } = useMergedata();

  const chooseAnimaClassName = (change?: ChangePrice): string => {
    if (change === ChangePrice.less) {
      return `text-sm md:text-base font-bold less`;
    }
    if (change === ChangePrice.more) {
      return `text-sm md:text-base font-bold more`;
    }
    return `text-sm md:text-base font-bold`;
  };

  const renderDataMobile = (val: IMergeData) => {
    if (filter === 'day') {
      return <PercentageData data={val.day} tag="div" className="text-end" />;
    }
    if (filter === 'week') {
      return <PercentageData data={val.week} tag="div" className="text-end" />;
    }

    if (filter === 'month') {
      return <PercentageData data={val.month} tag="div" className="text-end" />;
    }
    if (filter === 'year') {
      return <PercentageData data={val.year} tag="div" className="text-end" />;
    }
  };

  return (
    <tbody>
      {mergeData.map((val) => {
        return (
          <tr key={val.name}>
            <td className="p-0">
              <CryptLogo url={val.logo} color={val.color} />
            </td>
            <td className="md:flex justify-between max-w-[30vw] md:max-w-1/2 ">
              <div className="font-bold w-full truncate">{val.name}</div>
              <div className="text-slate-500 md:text-lg ">
                {val.currencySymbol}
              </div>
            </td>
            <td
              className={
                chooseAnimaClassName(val.change) + ` hidden md:table-cell`
              }
            >
              {formatRupiah(val.latestPrice)}
            </td>
            {/* mobile */}
            <td className="table-cell md:hidden">
              <div className={chooseAnimaClassName(val.change) + ' text-end'}>
                {formatRupiah(val.latestPrice)}
              </div>
              {renderDataMobile(val)}
            </td>
            {/* mobile */}
            <PercentageData data={val.day} className="hidden md:table-cell" />
            <PercentageData data={val.week} className="hidden md:table-cell" />
            <PercentageData data={val.month} className="hidden md:table-cell" />
            <PercentageData data={val.year} className="hidden md:table-cell" />
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
