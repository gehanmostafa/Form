
import { Controller, Control } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { TInput } from "./types";

interface ToggleButtonProps {
  name: keyof TInput;
  control: Control<TInput>;
  label: string;

}

const ToggleInput = ({
  name,
  control,
  label,

}:ToggleButtonProps) => {
  return (
    <div className="flex justify-between items-center">
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <button onClick={() => field.onChange(!field.value)} type="button">
            <FontAwesomeIcon
              icon={field.value ? faToggleOn : faToggleOff}
              size="2x"
           
            />
          </button>
        )}
      />
    </div>
  );
};

export default ToggleInput;
