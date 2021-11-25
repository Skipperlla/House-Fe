import Input from "@components/Input";
import React, { ReactNode } from "react";
interface IFormField {
  value: string;
  placeholder: string;
  handleChange: any;
  type: string;
  name: string;
  label: string;
  error: ReactNode;
}
const FormField: React.FC<IFormField> = ({
  value,
  placeholder,
  handleChange,
  type,
  name,
  label,
  error,
}) => {
  return (
    <>
      <label className="text-base pb-2">{label}</label>
      <Input
        value={value}
        placeholder={placeholder}
        handleChange={handleChange}
        type={type}
        name={name}
      />
      {error}
    </>
  );
};

export default FormField;
