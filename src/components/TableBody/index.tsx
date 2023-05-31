import { ReactSVG } from 'react-svg';
import { useMergedata } from 'src/hooks';
import { formatRupiah } from 'src/utils/formatRp';
import PercentageData from '../PercentageData';

function TableBody() {
  const { mergeData } = useMergedata();

  const colorText = (numb?: number) => {
    if (numb) return numb > 0 ? 'text-green-500' : 'text-red-500';
    return 'text-inherit';
  };
  return (
    <tbody>
      {mergeData.map((val) => {
        return (
          <tr>
            <td className="p-0">
              {val.logo ? (
                <ReactSVG
                  className=" flex justify-center "
                  src={val.logo}
                  beforeInjection={(svg) => {
                    svg.setAttribute('height', '40');
                    svg.setAttribute('width', '40');
                    svg.setAttribute('style', `color: ${val.color};`);
                  }}
                />
              ) : null}
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
