import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = () => {
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
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: !expanded ? "#FF0088" : "#0055FF" }}
        // onClick={() => setExpanded(expanded ? false : i)}
      />
      <AnimatePresence initial={false}>
        <div
          className="lg:hidden flex items-center justify-center py-2 border"
          onClick={() => setExpanded(!expanded)}
        >
          Ömer
        </div>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className=""
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className=" flex-1">
              <div className="transition-all  flex flex-col">
                {items.map((items, index) => {
                  return (
                    <Link href={items.target} key={index}>
                      <a
                        className={`${
                          router.pathname == items.target
                            ? "bg-gray-100 font-semibold"
                            : "bg-white"
                        } py-2 px-4 text-center border-r border-l  border-b`}
                      >
                        {items.title}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveMenu;
{
  /* <div className="border flex-1">
<div className="flex items-center justify-center py-2">Ömer</div>

</div> */
}
