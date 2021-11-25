import Main from "@components/Dashboard/Main";
import Input from "@components/Input";
import React, { useState } from "react";
import Loader from "react-loader-spinner";

const Index = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  return (
    <Main title={"Hesap Detayları"}>
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex items-center mb-4">
          <span className="text-gray-500 text-base">esmere1975@gmail.com</span>
          <span className="ml-4 bg-gray-100 py-0.5 px-4">Member</span>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="flex flex-col w-full lg:mb-0 mb-4">
            <label className="text-base pb-2">İsim</label>
            <Input
              value={form?.firstName}
              placeholder="İsim"
              handleChange={setForm}
              type={"text"}
              name={"firstName"}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-base pb-2">Soyisim</label>
            <Input
              value={form?.lastName}
              placeholder="Soyisim"
              handleChange={setForm}
              type={"text"}
              name={"lastName"}
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-4">
          <label className="text-base pb-2">E-posta</label>
          <Input
            value={form?.email}
            placeholder="İsim"
            handleChange={setForm}
            type={"email"}
            name={"email"}
          />
        </div>
        <div className="border-t pt-4">
          <div className="hover:bg-gray-100 rounded transition-all border">
            <button type="submit" className="py-2 px-4  w-full">
              Kaydet
            </button>
          </div>
        </div>
      </form>
    </Main>
  );
};

export default Index;
