import Main from "@components/Dashboard/Main";
import Input from "@components/Input";
import React, { useState } from "react";
import Loader from "react-loader-spinner";

const Security = () => {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  return (
    <Main title={"Hesap Güvenliği"}>
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-4">
          <div className="flex flex-col w-full mb-4 lg:mb-0">
            <label className="text-base pb-2">Yeni Şifre</label>
            <Input
              value={form?.password}
              placeholder="Yeni Şifre"
              handleChange={setForm}
              type={"password"}
              name={"password"}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-base pb-2">Yeni Şifre(Tekrar)</label>
            <Input
              value={form?.confirmPassword}
              placeholder="Yeni Şifre(tekrar)"
              handleChange={setForm}
              type={"password"}
              name={"confirmPassword"}
            />
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="hover:bg-gray-100 rounded transition-all border">
            <button type="submit" className="py-2 px-4  w-full">
              Şifreyi Yenile
            </button>
          </div>
        </div>
      </form>
    </Main>
  );
};

export default Security;
