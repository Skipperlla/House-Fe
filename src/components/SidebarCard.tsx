import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import home from "../../public/shirt.jpg";
import Image from "next/image";

const SidebarCard = () => {
  return (
    <div className="p-4 flex items-center flex-col w-full">
      <div className="flex ">
        <Image
          src={home}
          layout="fixed"
          width={100}
          height={100}
          className="object-cover rounded-xl"
          alt=""
        />
        <div className="ml-6 text-xl font-semibold text-blue-500 flex items-center justify-between w-full">
          <span>Converse All Start</span>
          <FontAwesomeIcon icon="trash" />
        </div>
      </div>
      <div className="w-full mt-4 text-xl">
        <div className="flex items-center justify-between">
          <span>Fiyat</span>
          <span>40₺</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span>Adet</span>
          <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarCard;
