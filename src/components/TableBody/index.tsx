import { useMergedata } from 'src/hooks';
import { formatRupiah } from 'src/utils/formatRp';
import PercentageData from '../PercentageData';
import CryptLogo from '../CryptLogo';

function TableBody() {
  const { mergeData } = useMergedata();

  return (
    <tbody>
      {mergeData.map((val) => {
        return (
          <tr>
            <td className="p-0">
              <CryptLogo url={val.logo} color={val.color} />
            </td>
            <td className="md:flex justify-between min-w-1/2 ">
              <div className="font-bold ">{val.name}</div>
              <div className="text-slate-500 text-lg">{val.currencySymbol}</div>
            </td>
            <td className="font-bold">{formatRupiah(val.latestPrice)}</td>
            <PercentageData data={val.day} />
            <PercentageData data={val.week} />
            <PercentageData data={val.month} />
            <PercentageData data={val.year} />
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
