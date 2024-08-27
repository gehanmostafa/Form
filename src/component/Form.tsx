import { useState } from "react";
import { useForm } from "react-hook-form";
import BrightnessSlider from "./Brightness";
import ToggleButton from "./ToggleInput";
import SelectInput from "./SelectInput";
import { TInput } from "./types";

const defaultValues = {
  brightness: 50,
  autoBrightness: true,
  nightShift: true,
  autoLock: "1 Minute",
  raiseToWake: true,
  textSize: "12px",
  boldText: false,
  displayZoom: false,
};

function Form() {
  const { control, handleSubmit } = useForm({ defaultValues });
  const [showData, setShowData] = useState<TInput>();

  const onSubmit = (data: TInput) => {
    setShowData(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black text-white p-4 rounded-md space-y-4 w-[70%] m-auto mt-3"
      >
        <BrightnessSlider control={control} />
        <ToggleButton
          name="autoBrightness"
          control={control}
          label="Auto-Brightness"
        />
        <ToggleButton name="nightShift" control={control} label="Night Shift" />
        <SelectInput
          name="autoLock"
          control={control}
          label="Auto-Lock"
          options={[
            { value: "30 Seconds" },
            { value: "1 Minute" },
            { value: "2 Minutes" },
            { value: "5 Minutes" },
          ]}
        />
        <ToggleButton
          name="raiseToWake"
          control={control}
          label="Raise to Wake"
        />
        <SelectInput
          name="textSize"
          control={control}
          label="Text Size"
          options={[{ value: "10px" }, { value: "12px" }, { value: "14px" }]}
        />
        <ToggleButton name="boldText" control={control} label="Bold Text" />
        <ToggleButton
          name="displayZoom"
          control={control}
          label="Display Zoom"
        />

        <button
          type="submit"
          className="bg-slate-500 hover:bg-slate-700 transition-all duration-75 text-white p-2 rounded mt-4"
        >
          Apply Settings
        </button>
      </form>
      <div className="w-[70%] m-auto font-bold my-4">
        <p> Brightness: {JSON.stringify(showData?.brightness)} </p>
        <p> autoBrightness: {JSON.stringify(showData?.autoBrightness)} </p>
        <p> nightShift: {JSON.stringify(showData?.nightShift)} </p>
        <p> autoLock: {JSON.stringify(showData?.autoLock)} </p>
        <p> raiseToWake: {JSON.stringify(showData?.raiseToWake)} </p>
        <p> TextSize: {JSON.stringify(showData?.textSize)} </p>
        <p> BoldText: {JSON.stringify(showData?.boldText)} </p>
        <p> DisplayZoom: {JSON.stringify(showData?.displayZoom)} </p>
      </div>
    </>
  );
}

export default Form;
