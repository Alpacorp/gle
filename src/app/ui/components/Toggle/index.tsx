"use client";

import { FC, useState } from "react";
import { MiddleWorld } from "..";

interface ToggleProps {
  onChange: Function;
  lang: string;
}

const Toggle: FC<ToggleProps> = ({ onChange, lang }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  return (
    <div>
      <input
        type="checkbox"
        id="language"
        className="hidden"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <div>
        <MiddleWorld />
      </div>
      <label
        htmlFor="language"
        className={`relative flex items-center rounded-full cursor-pointer border-2 border-main-red mx-4 w-[42px] h-[22px] transition-all duration-300 ${
          lang === "en" ? "bg-white" : "bg-main-red"
        }`}
      >
        {lang === "en" ? (
          <span className="absolute left-0 ml-[3px] text-main-red text-xs font-medium font-poppins">
            EN
          </span>
        ) : (
          <span className="absolute right-0 mr-1 text-white text-xs font-medium font-poppins">
            ES
          </span>
        )}{" "}
        <div
          className={`w-4 h-4 rounded-full absolute top-[1px] left-0 flex items-center justify-center ${
            lang === "en"
              ? "animate-slide-on bg-main-red"
              : "animate-slide-off bg-white"
          } transition-transform duration-300`}
        />
      </label>
    </div>
  );
};

export default Toggle;
