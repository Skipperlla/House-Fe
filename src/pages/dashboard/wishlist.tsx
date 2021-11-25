import Main from "@components/Dashboard/Main";
import Menu from "@components/Dashboard/Menu";
import WishlistCard from "@components/Dashboard/WishlistCard";
import React from "react";
import Loader from "react-loader-spinner";
import home from "../../../public/shirt.jpg";
const Wishlist = () => {
  return (
    <Main title={"Favoriler"}>
      {/* <div className="text-center">Favorilere Eklenen Bulunamadı</div> */}
      <WishlistCard
        src={home}
        target={"/product/12"}
        order={"#312321312312312312"}
        orderOn={"Pazartesi,Aralık 25,2021"}
        orderTotal={"40₺"}
      />
       <WishlistCard
        src={home}
        target={"/product/12"}
        order={"#312321312312312312"}
        orderOn={"Pazartesi,Aralık 25,2021"}
        orderTotal={"40₺"}
      />
    </Main>
  );
};

export default Wishlist;
