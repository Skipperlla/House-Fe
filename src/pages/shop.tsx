import Filter from "@components/Shop/Filter";
import ProductCart from "@components/Shop/ProductCart";
import React from "react";

const Shop = () => {
  return (
    <div className="flex flex-col">
      <Filter />
      <div className="grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 grid-cols-0 gap-4">
        <ProductCart
          title={"T-Shirt"}
          description={"Lorem1532193 392193912 3129312"}
          price={"2567"}
          target={"/product/12"}
        />
        <ProductCart
          title={"Shoes"}
          description={"Ömer Esmer"}
          price={"124"}
          target={"/product/13"}
        />
      </div>
    </div>
  );
};

export default Shop;
