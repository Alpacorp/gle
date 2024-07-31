'use client';

import { FC, useState } from 'react';
import { MiddleWorld } from '@ui/components';

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
      <div>
        <MiddleWorld />
      </div>
      <label
        htmlFor="language"
        className={`relative flex items-center rounded-full cursor-pointer border-2 border-main-red mx-4 w-[2.625rem] h-[1.375rem] transition-all duration-300 max-[850px]:mx-1 ${
          lang === 'en' ? 'bg-white' : 'bg-main-red'
        }`}
        onKeyDown={(event: React.KeyboardEvent<HTMLLabelElement>) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleToggleChange();
          }
        }}
        tabIndex={0}
      >
        {lang === 'en' ? (
          <span className="absolute left-0 ml-1 text-main-red text-xs font-medium font-poppins">
            EN
          </span>
        ) : (
          <span className="absolute right-0 mr-1 text-white text-xs font-medium font-poppins">
            ES
          </span>
        )}{' '}
        <div
          className={`w-4 h-4 rounded-full absolute top-[0.063rem] left-0 flex items-center justify-center ${
            lang === 'en'
              ? 'animate-slide-on bg-main-red'
              : 'animate-slide-off bg-white'
          } transition-transform duration-300`}
        />
      </label>
    </div>
  );
};
