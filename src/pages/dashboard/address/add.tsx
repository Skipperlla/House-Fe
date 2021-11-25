import FormField from "@components/Dashboard/FormField";
import Main from "@components/Dashboard/Main";
import useInput from "hooks/useInput";
import React, { useState } from "react";
import Loader from "react-loader-spinner";
const Add = () => {
  const [form, setForm] = useInput({
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const [submit, onSubmit] = useState<boolean>(false);
  return (
    <Main title={"Adres Ekle"}>
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();

          if (
            form?.address?.length == 0 ||
            form?.city?.length == 0 ||
            form?.state?.length == 0 ||
            form?.country?.length == 0 ||
            form?.zipCode?.length < 5
          ) {
            onSubmit(true);
          } else {
            onSubmit(false);
          }
        }}
      >
        <div className="flex flex-col w-full my-4">
          <FormField
            value={form?.address}
            placeholder="Adres"
            handleChange={setForm}
            type={"text"}
            name={"address"}
            label={"Adres"}
            error={
              submit &&
              form?.address?.length == 0 && (
                <label
                  className={`text-red-500 mt-2 transition-all ${
                    !submit ? "opacity-0" : "opacity-1"
                  }`}
                >
                  Adres Gereklidir
                </label>
              )
            }
          />
        </div>
        <div className="flex flex-col w-full my-4">
          <FormField
            value={form?.city}
            placeholder="Şehir"
            handleChange={setForm}
            type={"text"}
            name={"city"}
            label={"Şehir"}
            error={
              submit &&
              form?.city?.length == 0 && (
                <label
                  className={`text-red-500 mt-2 transition-all ${
                    !submit ? "opacity-0" : "opacity-1"
                  }`}
                >
                  Şehir Gereklidir
                </label>
              )
            }
          />
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="flex flex-col w-full lg:mb-0 mb-4">
            <FormField
              value={form?.state}
              placeholder="İlçe"
              handleChange={setForm}
              type={"text"}
              name={"state"}
              label={"İlçe"}
              error={
                submit &&
                form?.state?.length == 0 && (
                  <label
                    className={`text-red-500 mt-2 transition-all ${
                      !submit ? "opacity-0" : "opacity-1"
                    }`}
                  >
                    İlçe Gereklidir
                  </label>
                )
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <FormField
              value={form?.country}
              placeholder="Ülke"
              handleChange={setForm}
              type={"text"}
              name={"country"}
              label={"Ülke"}
              error={
                submit &&
                form?.country?.length == 0 && (
                  <label
                    className={`text-red-500 mt-2 transition-all ${
                      !submit ? "opacity-0" : "opacity-1"
                    }`}
                  >
                    Ülke Gereklidir
                  </label>
                )
              }
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-4">
          <FormField
            value={form?.zipCode}
            placeholder="Posta Kodu"
            handleChange={setForm}
            type={"text"}
            name={"zipCode"}
            label={"Posta Kodu"}
            error={
              submit &&
              form?.zipCode?.length < 5 && (
                <label
                  className={`text-red-500 mt-2 transition-all ${
                    !submit ? "opacity-0" : "opacity-1"
                  }`}
                >
                  Posta Kodu en az 5 karakter olmalıdır.
                </label>
              )
            }
          />
        </div>
        <div className="border-t pt-4 mt-4">
          <div className="hover:bg-gray-100 rounded transition-all border">
            <button type="submit" className="py-2 px-4  w-full">
              Adresi Ekle
            </button>
          </div>
        </div>
      </form>
    </Main>
  );
};

export default Add;
