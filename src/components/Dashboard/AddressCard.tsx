import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import home from "../../../public/home.png";
import Image from "next/image";
const AddressCard: React.FC<{ address: string }> = ({ address }) => {
  return (
    <div className="relative hover:bg-gray-100 transition-all flex items-center border shadow rounded mb-4">
      <div className="absolute z-10 bg-red-500 -right-2 hover:bg-red-700 transition-all cursor-pointer w-6 h-6 rounded-full flex items-center justify-center text-white text-sm -top-2">
        <FontAwesomeIcon icon="times" />
      </div>
      <div className="h-full flex items-center justify-center w-24">
        <Image
          src={home}
          layout="fixed"
          alt=""
          width={50}
          height={50}
          className="object-cover"
        />
        {/* <FontAwesomeIcon icon="home" className="text-2xl" /> */}
      </div>
      <div className="p-6 w-full h-full flex-1">
        <span>{address}</span>
      </div>
    </div>
  );
};

export default AddressCard;
