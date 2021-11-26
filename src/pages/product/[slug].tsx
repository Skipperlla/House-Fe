import React from "react";
import Image from "next/image";
import shirt from "../../../public/shoes.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInput from "hooks/useInput";
import SingleProductCard from "@components/Shop/SingleProductCard";
const SingleProduct = () => {
  const [form, setForm, setState] = useInput({
    title: "",
    price: "",
    description: ``,
    quantity: 0,
  });

  return (
    <div className="flex justify-between ">
      <SingleProductCard
        form={form}
        setState={setState}
        setForm={setForm}
        title={"Converse All Start"}
        price={"40₺"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere expedita deleniti sit eligendi hic beatae perspiciatis odit`}
      />
    </div>
  );
};

export default SingleProduct;
