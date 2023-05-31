import React from 'react';

// type SearchSectionProps = {};

const SearchSection: React.FC = () => {
  return (
    <section className="flex justify-between my-5">
      <h1 className="font-bold xs:text-2xl md:text-3xl">
        Harga Crypto Dalam Rupiah Hari Ini
      </h1>
      <div className="w-1/3">
        <input
          type="text"
          placeholder="Cari Aset di pintu..."
          className="input input-bordered w-full bg-gray-200"
        />
      </div>
    </section>
  );
};

export default SearchSection;
