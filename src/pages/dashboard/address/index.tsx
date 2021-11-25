import AddressCard from "@components/Dashboard/AddressCard";
import Main from "@components/Dashboard/Main";
import Input from "@components/Input";
import React, { useState } from "react";
import Loader from "react-loader-spinner";

const Address = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  return (
    <Main title={"Adres"}>
      {/* <div className="text-center">No Addresses Found!</div> */}
      <AddressCard
        address={
          "Lorem ipsum"
        }
      />
    </Main>
  );
};

export default Address;
