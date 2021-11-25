import Filter from "@components/Shop/Filter";
import ProductCart from "@components/Shop/ProductCart";
import React from "react";

const Shop = () => {
  return (
    <div className="flex flex-col">
      <Filter />
      <div className="grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 grid-cols-0 gap-4">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};

export default Shop;
