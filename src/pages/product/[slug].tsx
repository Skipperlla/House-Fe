import React from "react";
import Image from "next/image";
import shirt from "../../../public/shoes.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInput from "hooks/useInput";
const SingleProduct = () => {
  const [form, setForm] = useInput({ quantity: 0 });

  return (
    <div className="flex justify-between ">
      <form
        method="post"
        className="flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="w-1/2 rounded">
          <Image
            src={shirt}
            layout="responsive"
            className="rounded object-cover"
            alt=""
          />
        </div>
        <div className="bg-white w-full border ml-4 p-5 rounded shadow-inner">
          <header className="border-b pb-2">
            <h1 className="text-blue-500 text-2xl ">Converse All Start</h1>
          </header>
          <section className="pt-4">
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              expedita deleniti sit eligendi hic beatae perspiciatis odit,
              mollitia velit ea distinctio doloribus saepe aut voluptate.
              Reiciendis reprehenderit magni temporibus minus, fugit labore
              mollitia dolorem impedit voluptatibus, quos accusantium asperiores
              sed cum culpa exercitationem. Ipsa amet voluptas ab rerum
              similique dolore alias molestiae accusamus unde libero error
              facere tenetur aperiam soluta blanditiis quis enim praesentium,
              dicta voluptatibus exercitationem maiores laborum. Quis architecto
              dolor labore consequuntur? Voluptas repellendus nobis velit facere
              magnam sapiente minus nihil temporibus iusto, quasi, odio tempore
              distinctio! Fugit et non aliquid ab cumque quod, molestiae
              accusamus doloribus laborum, beatae nesciunt ipsum neque in, dicta
              eos! Fugiat labore animi doloribus amet sapiente voluptatum quidem
              blanditiis alias cupiditate possimus, praesentium recusandae
              itaque sint voluptatibus. Dolores exercitationem commodi delectus
              eum libero neque repellendus nemo qui dignissimos quidem et
              inventore odio pariatur alias molestias provident, quam quas
              voluptate harum quos voluptatum. Esse.
            </p>
            <div className="text-3xl mt-3">40₺</div>
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
                placeholder="Product Quantity"
                className="border w-full py-1 px-2 mt-2 focus:outline-none"
              />
              {form.quantity >= 25 && (
                <span
                  className={`text-red-500 mt-2 text-sm opacity-1 transition-all`}
                >
                  Quantity may not be greater than 25.
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
    </div>
  );
};

export default SingleProduct;
