import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface IOrderCard {
  src: StaticImageData;
  order: string;
  orderOn: string;
  orderTotal: string;
  target: string;
}
// react-hooks/exhaustive-deps
// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//   }, [window?.innerWidth]);
//   return size;
// }
const OrderCard: React.FC<IOrderCard> = ({
  src,
  order,
  orderOn,
  orderTotal,
  target,
}) => {
  // const [width, height] = useWindowSize();

  return (
    <Link href={target}>
      <a className="hover:bg-gray-100 transition-all border lg:py-2 lg:px-4 rounded flex bg-white shadow lg:shadow-sm mb-4 lg:flex-row flex-col">
        <div className="object-cover shadow-xl  lg:border-none border-b">
          <Image
            src={src}
            width={120}
            height={120}
            layout={"responsive"}
            className="object-cover"
            alt=""
          />
        </div>
        <div className="py-4 px-4 flex-1 lg:ml-6  flex flex-col justify-between ">
          <div className="flex">
            <span>Sipariş Numarası:</span>
            <span className="ml-2 text-gray-500">{order}</span>
          </div>
          <div className="flex">
            <span>Sipariş Tarihi:</span>
            <span className="ml-2 text-gray-500">{orderOn}</span>
          </div>
          <div className="flex">
            <span>Sipariş Tutarı:</span>
            <span className="ml-2 text-gray-500">{orderTotal}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default OrderCard;
