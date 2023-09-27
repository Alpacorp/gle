import { FC, useState } from "react";

interface ToggleProps {
  onChange: Function;
  lang: string;
}

export const Toggle: FC<ToggleProps> = ({ onChange, lang }) => {
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
      <label
        htmlFor="language"
        className="relative bg-gray-300 rounded-full cursor-pointer inline-block mx-4 w-10 h-5 transition-all duration-300"
      >
        {/* {lang === "es" && <span className="text-gray-800">ES</span>}{" "} */}
        <div
          className={`bg-white w-5 h-5 rounded-full absolute top-0 left-0 flex items-center justify-center ${
            lang === "es" ? "animate-slide-on" : "animate-slide-off"
          } transition-transform duration-300`}
        />
      </label>
      {/* <span className="text-gray-800">{lang === "es" ? "ES" : "EN"}</span> */}
    </div>
  );
};
