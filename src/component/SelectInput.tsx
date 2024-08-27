

import { Controller, Control } from "react-hook-form";
import { TInput } from "./types";

interface SelectInputProps {
  name: keyof TInput;
  control: Control<TInput>;
  label: string;
  options: { value: string;}[];
}

const SelectInput = ({ name, control, label, options }: SelectInputProps) => {
  return (
    <div className="flex justify-between items-center">
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select {...field} className=" text-white p-1 rounded w-[60%] bg-transparent ">
            {options.map((option) => (
              <option key={option.value} value={option.value} >
                {option.value}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default SelectInput;
