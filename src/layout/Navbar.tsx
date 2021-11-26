import HeaderInfo from "@components/Navbar/HeaderInfo";
import Menu from "@components/Navbar/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const ref = useRef<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });
  function closeMenu() {
    setIsOpen(false);
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <header className="bg-white z-40">
      <HeaderInfo />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="lg:h-7/2 py-4 border-b ">
        <div className="px-4 w-full mx-auto max-w-6xl  lg:grid lg:grid-cols-3 lg:grid-rows-none flex flex-col">
          <div className="flex items-center h-full text-xl w-full justify-center lg:justify-start mb-4 lg:mb-0">
            <Link href="/">
              <a>
                <h1>House Giyim</h1>
              </a>
            </Link>
          </div>
          <div className="lg:hidden flex items-center justify-between">
            <FontAwesomeIcon icon="bars" className="text-2xl text-gray-300" />
            <div
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(true);
              }}
              className=" h-full flex items-center justify-end cursor-pointer  transition-all hover:text-gray-300 relative hover:opacity-50"
            >
              <span
                className="absolute text-center font-semibold w-3 h-3 p-2 text-white text-xs  flex items-center justify-center rounded-full -top-2 -right-2"
                style={{ background: "#2962ff" }}
              >
                9
              </span>

              <FontAwesomeIcon icon="shopping-cart" className="text-xl" />
            </div>
          </div>
          <div className="w-full lg:block hidden">
            <input
              type="text"
              className="border py-2 px-5 w-full focus:outline-none rounded"
              placeholder="Search Products"
            />
          </div>
          <div className="flex items-center  justify-center lg:justify-start flex-row-reverse relative">
            <div
              className="h-full flex items-center justify-center cursor-pointer transition-all hover:opacity-50 "
              onClick={() => setIsOpen(!isOpen)}
              ref={ref}
            >
              <span>Ömer</span>
              <FontAwesomeIcon icon="chevron-down" className="ml-1 text-xs" />
            </div>
            {isOpen && <Menu clickOutside={ref} closeMenu={closeMenu} />}
            <div className="h-full flex items-center justify-center cursor-pointer transition-all hover:opacity-50 mr-5">
              <Link href="/shop">
                <a>Mağaza</a>
              </Link>
            </div>

            <div
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(true);
              }}
              className="hidden h-full lg:flex items-center justify-center cursor-pointer mr-5 transition-all hover:text-gray-300 relative hover:opacity-50"
            >
              <span
                className="absolute text-center font-semibold w-3 h-3 p-2 text-white text-xs  flex items-center justify-center rounded-full top-0 -right-2"
                style={{ background: "#2962ff" }}
              >
                9
              </span>

              <FontAwesomeIcon icon="shopping-cart" className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
function useOnClickOutside(
  ref: React.MutableRefObject<any>,
  handler: { (): any; (arg0: any): void }
) {
  useEffect(
    () => {
      const listener = (event: { target: any }) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
export default Navbar;
