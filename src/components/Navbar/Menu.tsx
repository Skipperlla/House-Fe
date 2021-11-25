import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface IMenu {
  clickOutside: any;
  closeMenu: () => void;
}
const Menu: React.FC<IMenu> = ({ clickOutside, closeMenu }) => {
  const dispatch = useDispatch();
  return (
    <div
      ref={clickOutside}
      className="z-40 w-44 bg-white absolute rounded shadow-xl lg:top-10 top-8 right-28 py-2 px-4 lg:right-0 text-black border text-sm"
    >
      <Link href="/dashboard">
        <a
          onClick={closeMenu}
          className="h-10 w-full flex items-center justify-between hover:bg-primary-dropdownMenuHover transition-all hover:bg-gray-100"
        >
          <div className="h-full flex items-center justify-center w-1/2 ">
            <FontAwesomeIcon
              icon="tachometer-alt"
              className="text-base text-primary-bookingIcon "
            />
          </div>
          <div className="w-full text-base h-full flex items-center">
            Dashboard
          </div>
        </a>
      </Link>
      <div className="cursor-pointer h-10 w-full flex items-center justify-between hover:bg-primary-dropdownMenuHover transition-all hover:bg-gray-100">
        <div className="h-full flex items-center justify-center w-1/2">
          <FontAwesomeIcon
            icon={"sign-out-alt"}
            className="text-base text-primary-bookingIcon "
          />
        </div>
        <div className="w-full text-base h-full flex items-center">Logout</div>
      </div>
    </div>
  );
};

export default Menu;
