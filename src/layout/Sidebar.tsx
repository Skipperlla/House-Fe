import Navigation from "@components/Navbar/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import home from "../../public/shirt.jpg";
import Image from "next/image";
import SidebarCard from "@components/SidebarCard";
interface ISidebar {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: React.FC<ISidebar> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <aside
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 w-full left-0 z-30  overflow-y-auto transition duration-200 ease-out transform translate-x-0 bg-white  lg:translate-x-0 lg:static lg:inset-0  block lg:hidden ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex flex-col text-black h-full">
          <div
            className="flex items-center justify-end   border-b"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon icon="times" className="text-xl my-2 mx-4" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <SidebarCard />
            <div className="">
              <div className="bg-gray-100 p-4 text-xl">
                <div className="flex items-center justify-between">
                  <span>Toplam</span>
                  <span>40₺</span>
                </div>
              </div>
              <div className="p-4">
                <button
                  onClick={closeSidebar}
                  className="border w-full py-2 px-4 mb-4"
                >
                  Alışverişe Devam Et
                </button>
                <button className="border w-full py-2 px-4">
                  Siparişi Tamamla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
