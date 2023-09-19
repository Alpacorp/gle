"use client";

import { FC, useContext, useRef } from "react";

import { Context } from "@/src/app/context/Context";

export const HamburguerMenu: FC = () => {
  const { setShowMenu } = useContext(Context);

  const activeSubmenuRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      onClick={() => {
        setShowMenu(true);
      }}
      ref={activeSubmenuRef}
      className="bg-main-red rounded-lg peer-checked:hamburger z-20 hidden max-[768px]:block lg:hidden max-[500px]:p-0"
    >
      <svg
        width="49"
        height="40"
        viewBox="0 0 69 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="69" height="70" fill="#D81730" />
        <path
          d="M16 23.6755L52 23.8172V27.6755H18.8421L16 23.6755Z"
          fill="white"
        />
        <path d="M23.3809 33H52.0001V37H26.0431L23.3809 33Z" fill="white" />
        <path
          d="M31.3674 42.3245H51.9999V46.3241L34.0297 46.3245L31.3674 42.3245Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
