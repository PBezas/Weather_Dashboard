import { KeyboardEvent, useState, ChangeEvent } from "react";
import { UserPromptProps } from "../types/types";

const UserPrompt = ({ sumbitPrompt }: UserPromptProps) => {
  const [prompt, setPrompt] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value.toLowerCase());
  };

  const handleSubmit = () => {
    sumbitPrompt(prompt);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex w-[60%] items-center h-13 border-2 border-white rounded-xl p-3">
      <input
        className="p-2 outline-none h-full flex-2/3"
        placeholder="e.g. Paris"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button
        className="border border-white size-[30px] max-w-[60px] p-2 rounded-full text-white cursor-pointer hover:border-gray-200 flex justify-center items-center flex-1/3 hover:bg-white hover:text-emerald-300 font-bold text-xl"
        onClick={handleSubmit}
      >
        &#x279C;
      </button>
    </div>
  );
};

export default UserPrompt;
