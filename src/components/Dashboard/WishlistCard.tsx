import React from "react";

import Image from "next/image";
import Link from "next/link";
import { IOrderCard } from "./OrderCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WishlistCard: React.FC<IOrderCard> = ({
  src,
  order,
  orderOn,
  orderTotal,
  target,
}) => {
  return (
    <div className="relative bg-white">
      <div className="absolute z-10 bg-red-500 -right-2 hover:bg-red-700 transition-all cursor-pointer w-6 h-6 rounded-full flex items-center justify-center text-white text-sm -top-2">
        <FontAwesomeIcon icon="times" />
      </div>
      <Link href={target}>
        <a className="hover:bg-gray-100 transition-all border  rounded flex  shadow-sm mb-4">
          <div className="object-cover shadow-xl">
            <Image
              src={src}
              width={120}
              height={120}
              layout="fixed"
              className="object-cover rounded shadow-sm"
              alt=""
            />
          </div>
          <div className="py-2 px-4 flex-1  flex flex-col justify-between">
            <span className="ml-2 text-gray-500">{order}</span>

            <span className="ml-2 text-gray-500">{orderOn}</span>

            <span className="ml-2 text-gray-500">{orderTotal}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default WishlistCard;
