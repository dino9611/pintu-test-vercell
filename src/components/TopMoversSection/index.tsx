import React from 'react';
import { useTopMoversdata } from 'src/hooks';
import TopMoversItem from '../TopMoversItem';

const TopMovers: React.FC = () => {
  const { TopMovers } = useTopMoversdata();
  console.log('topMover');

  return (
    <div className="my-5">
      <h2 className="font-bold  xs:text-base md:text-lg">
        🔥 Top Movers (24 JAM)
      </h2>
      <div className="my-4 flex md:space-x-6  bg overflow-scroll">
        {TopMovers.map((val) => {
          return <TopMoversItem data={val} key={val.name} />;
        })}
      </div>
    </div>
  );
};

export default TopMovers;
