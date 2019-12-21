import React, { FC, ChangeEvent } from "react";
import { InputLabel, Input, InputError } from "./styled";

interface IInputWithValidation {
  label: string;
  value: string | number;
  name: string;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "number";
  error?: string;
}
const InputWithValidation: FC<IInputWithValidation> = (
  input: IInputWithValidation
) => {
  const { label, value, name, change, type, error } = input;
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Input
        type={type}
        className={`w-100 ${error && error !== "" ? "error" : ""}`}
        name={name}
        value={value}
        onChange={change}
      />
      {error && error !== "" && <InputError>{error}</InputError>}
    </>
  );
};

export default InputWithValidation;
