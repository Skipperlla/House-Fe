import React, { useState } from "react";
import Image from "next/image";
import shirt from "../../../public/shirt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as CurrencyFormat from "react-currency-format";

import Link from "next/link";
const ProductCart = () => {
  const [like, setLike] = useState<boolean>(false);
  return (
    <div className="relative border rounded shadow-sm bg-white flex flex-col">
      <div className="z-10" onClick={() => setLike(!like)}>
        <FontAwesomeIcon
          icon="heart"
          className={`cursor-pointer absolute right-3 text-3xl top-3 ${
            like ? "text-red-500" : "text-gray-300"
          }`}
        />
      </div>
      <Link href="/">
        <a>
          <div className="relative rounded-t border-b flex items-center justify-center">
            <Image
              src={shirt}
              layout="intrinsic"
              width={197}
              height={197}
              className="object-cover rounded-t"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="p-4 flex flex-col">
              <h1 className="text-blue-400 text-xl font-semibold">T-Shirt</h1>
              <span className="break-all text-sm mt-2 text-gray-500">
                dsakdlsadl sldladlsa lddaslşk ldklşaskdlşkaşld ladklaklş kalşd
                klaşd lsald lald lald asldsladlas ldlad lald lasl asldsladla
              </span>
            </div>
            <div className="p-4 flex justify-between items-center">
              {/* <CurrencyFormat
                value={2456981}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              /> */}
              <span>2,4569.81₺</span>

              <div className="flex items-center justify-center">
                <span className="mr-1 mt-1">4.4</span>
                <FontAwesomeIcon icon="star" className="text-yellow-400" />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCart;
