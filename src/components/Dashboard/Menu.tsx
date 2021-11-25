import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
const Menu = () => {
  const items = [
    { title: "Hesap Detayları", target: "/dashboard" },
    { title: "Hesap Güvenliği", target: "/dashboard/security" },
    {
      title: "Adres",
      target: "/dashboard/address",
    },
    { title: "Siparişler", target: "/dashboard/orders" },
    { title: "Favoriler", target: "/dashboard/wishlist" },
  ];
  const max = Math.max(items.length - 1);
  const router = useRouter();
  return (
    <div className="w-56 lg:flex flex-col h-56 hidden">
      {items.map((items, index) => {
        return (
          <Link href={items.target} key={index}>
            <a
              className={`${
                router.pathname == items.target
                  ? "bg-gray-100 font-semibold"
                  : "bg-white"
              } py-2 px-4 text-center border-t border-r border-l ${
                max == index && "border-b"
              }`}
            >
              {items.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
