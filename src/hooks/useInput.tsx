import React, { useState } from "react";

const useInput = (params: any) => {
  const [form, setForm] = useState(params);
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name == "quantity" ? Number(e.target.value) : e.target.value,
    });
  };
  return [form, handleChange, setForm];
};

export default useInput;
