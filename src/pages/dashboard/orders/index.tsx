import Main from "@components/Dashboard/Main";
import OrderCard from "@components/Dashboard/OrderCard";
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import home from "../../../../public/shirt.jpg";
const Orders = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  return (
    <Main title={"Siparişler"}>
      {/* <div className="text-center">No Addresses Found!</div> */}
      <div className="flex items-center mb-6">
        <div className="w-full flex-1">
          <input
            type="text"
            className="outline-none border py-2 px-4 w-full rounded-l"
            placeholder="Sipariş Numaranızı Giriniz"
          />
        </div>
        <div className="w-32 border-t border-r border-b py-2 rounded-r px-4 flex items-center justify-center transition-all hover:bg-blue-500 hover:text-white">
          <button className="w-full h-full">Search</button>
        </div>
      </div>
      <OrderCard
        src={home}
        order={"#312321312312312312"}
        orderOn={"Pazartesi,Aralık 25,2021"}
        orderTotal={"40₺"}
        target={`/dashboard/orders/213`}
      />
      <OrderCard
        src={home}
        order={"#312321312312312312"}
        orderOn={"Pazartesi,Aralık 25,2021"}
        orderTotal={"40₺"}
        target={`/dashboard/orders/213`}
      />
      <OrderCard
        src={home}
        order={"#312321312312312312"}
        orderOn={"Pazartesi,Aralık 25,2021"}
        orderTotal={"40₺"}
        target={`/dashboard/orders/213`}
      />
    </Main>
  );
};

export default Orders;
