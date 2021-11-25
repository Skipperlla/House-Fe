import React from "react";
interface IInput {
  value: string;
  placeholder: string;
  handleChange: any;
  type: string;
  name: string;
}
const Input: React.FC<IInput> = ({
  value,
  placeholder,
  handleChange,
  type,
  name,
}) => {
  console.log(value);
  return (
    <input
      value={value || ""}
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
      name={name}
      autoComplete="off"
      className="py-2 px-4 h-10 border rounded outline-none transition-all focus:border-gray-300"
    />
  );
};

export default Input;
