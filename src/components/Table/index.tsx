import React, { useState } from 'react';
import TableHead from 'src/components/TableHead';
import TableBody from 'src/components/TableBody';

const Table = () => {
  const [filter, setFilter] = useState('day');

  const OnFilterHandle: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFilter(e.target.value);
  };
  return (
    <table className="table w-full">
      <TableHead filter={filter} handleFilter={OnFilterHandle} />
      <TableBody filter={filter} />
    </table>
  );
};

export default Table;
