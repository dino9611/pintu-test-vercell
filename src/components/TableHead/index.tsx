import React from 'react';

interface TableHeadProps {
  filter: string;
  handleFilter: React.ChangeEventHandler<HTMLSelectElement>;
}

const TableHead: React.FC<TableHeadProps> = ({ filter, handleFilter }) => {
  return (
    <thead>
      <tr>
        <td className="max-w-[2%] hidden md:table-cell"></td>
        <td className="md:text-xl">CRYPTO</td>
        <td className="md:text-xl hidden md:table-cell">HARGA</td>
        <td className="md:hidden "></td>
        <td className="text-end md:hidden">
          <select
            value={filter}
            onChange={handleFilter}
            className="select select-bordered"
          >
            <option value="day">24 Jam</option>
            <option value="week">1 MGG</option>
            <option value="month">1 BLN</option>
            <option value="year">1 THN</option>
          </select>
        </td>
        <td className="text-xl hidden md:table-cell">24 JAM</td>
        <td className="text-xl hidden md:table-cell">1 MGG</td>
        <td className="text-xl hidden md:table-cell">1 BLN</td>
        <td className="text-xl hidden md:table-cell">1 THN</td>
      </tr>
    </thead>
  );
};

export default TableHead;
