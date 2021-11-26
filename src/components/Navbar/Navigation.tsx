import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface INavigation {
  title: string;
  closeSidebar: () => void;
  target: string;
  icon: string;
}
const Navigation: React.FC<INavigation> = ({
  title,
  closeSidebar,
  target,
  icon,
}) => {
  return (
    <Link href={target}>
      <a
        className="hover:bg-primary-dropdownMenuHover h-14 flex items-center mb-3 transition-all"
        onClick={closeSidebar}
      >
        <div className="h-full flex items-center w-14">
          <FontAwesomeIcon
            icon={icon as IconProp}
            className="text-2xl ml-4 mr-5 text-primary-bookingIcon"
          />
        </div>
        <div className="w-full text-lg h-full flex items-center border-b ml-1">
          {title}
        </div>
      </a>
    </Link>
  );
};

export default Navigation;
