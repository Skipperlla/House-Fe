import React, { useEffect } from "react";
import Image from "next/image";
import shirt from "../../../public/shoes.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInput from "hooks/useInput";
interface Single {
  form: { title: string; price: string; description: string; quantity: number };
  title: string;
  price: string;
  description: string;
  setState: any;
  setForm: any;
}
const SingleProductCard: React.FC<Single> = ({
  setState,
  form,
  setForm,
  title,
  price,
  description,
}) => {
  useEffect(() => {
    setState({ ...form, title, price, description });
  }, []);
  return (
    <form
      method="post"
      className="flex lg:justify-between w-full lg:flex-row flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        let items = [];
        items.push(form);
        localStorage.setItem("shopBag", JSON.stringify(items));
      }}
    >
      <div className="lg:w-1/2 rounded lg:mb-0 mb-4">
        <Image
          src={shirt}
          layout="responsive"
          className="rounded object-cover"
          alt=""
        />
      </div>
      <div className="bg-white w-full border lg:ml-4 p-5 rounded shadow-inner">
        <header className="border-b pb-2">
          <h1 className="text-blue-500 text-2xl ">{title}</h1>
        </header>
        <section className="pt-4">
          <p className="text-sm text-gray-500">{description}</p>
          <div className="text-3xl mt-3">{price}</div>
          <div className="flex flex-col">
            <span>Adet</span>
            <input
              autoComplete="on"
              step="step"
              min="1"
              max="25"
              pattern="[0-9]"
              onChange={setForm}
              type="number"
              name="quantity"
              placeholder="Adeti Seçiniz"
              className="border w-full py-1 px-2 mt-2 focus:outline-none"
            />
            {form.quantity >= 25 && (
              <span
                className={`text-red-500 mt-2 text-sm opacity-1 transition-all`}
              >
                25 den fazla seçim yapamazsınız
              </span>
            )}
          </div>

          <button
            style={{ maxWidth: "200px" }}
            type="submit"
            className="h-full border py-2 mt-8 px-4 transition-all  flex items-center justify-center hover:text-white hover:bg-blue-500 "
          >
            <FontAwesomeIcon icon="shopping-bag" className="mr-2" />
            <span>Sepete Ekle</span>
          </button>
        </section>
      </div>
    </form>
  );
};

export default SingleProductCard;
