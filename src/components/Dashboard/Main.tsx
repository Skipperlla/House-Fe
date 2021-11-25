import React, { ReactNode } from "react";
import Menu from "@components/Dashboard/Menu";
import { useRouter } from "next/dist/client/router";
import ResponsiveMenu from "./ResponsiveMenu";
interface IMain {
  children: ReactNode;
  title: string;
}
const Main: React.FC<IMain> = ({ children, title }) => {
  const router = useRouter();
  return (
    <main className="flex lg:justify-between h-full lg:flex-row flex-col">
      <ResponsiveMenu />
      <Menu />
      <div className="lg:flex-1 w-full lg:ml-6 flex flex-col">
        <div className="text-primary-header pb-3 border-b flex justify-between lg:items-center items-end">
          <h1 className="text-2xl mt:0 mt-4">{title}</h1>
          {router.pathname == "/dashboard/address/add" && (
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/dashboard/address");
              }}
              className="border px-10 hover:bg-gray-100 transition-all py-1"
            >
              İptal Et
            </button>
          )}
          {router.pathname == "/dashboard/address" && (
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/dashboard/address/add");
              }}
              className="border px-10 hover:bg-gray-100 transition-all py-1"
            >
              Ekle
            </button>
          )}
        </div>
        <section className="mt-4">{children}</section>
      </div>
    </main>
  );
};

export default Main;
