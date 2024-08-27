


import { Controller, Control } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { TInput } from "./types";

interface BrightnessProps {
  control: Control<TInput>;
}

const Brightness = ({ control }:BrightnessProps) => {
  return (
    <div>
      <h2 className="text-gray-400">BRIGHTNESS</h2>
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faSun} size="2x" className="text-gray-400" />
        <Controller
          name="brightness"
          control={control}
          render={({ field }) => (
            <input
              type="range"
              min="0"
              max="100"
              {...field}
              className=" range w-full mt-2 appearance-none bg-gray-600 h-1 rounded-full"
          
            />
          )}
        />
        <FontAwesomeIcon icon={faSun} size="2x" className="text-gray-400" />
      </div>
    </div>
  );
};

export default Brightness;
