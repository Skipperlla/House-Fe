import React from "react";
import Select from "react-select";
const Filter = () => {
  const options = [
    { value: "chocolate", label: "En Yeniler" },
    { value: "vanilla", label: "Fiyat Pahalıdan Ucuza" },
    { value: "strawberry", label: "Fiyat Ucuzdan Pahalıya" },
  ];
  return (
    <div className="flex items-center lg:justify-between mb-4 lg:flex-row flex-col">
      <div className="w-full text-sm flex items-center justify-center lg:block">
        <span className="text-lg">Showing:</span>&nbsp;&nbsp;
        <span>1 – 8 products of 10 products</span>
      </div>
      <div className="flex w-full items-center lg:justify-end">
        <span className="mr-4 lg:block hidden">Sort by</span>
        <Select
          defaultValue={options[0]}
          options={options}
          className="w-full lg:w-1/2 z-20 lg:mt-0 mt-4"
          isSearchable={false}
        />
      </div>
    </div>
  );
};

export default Filter;
