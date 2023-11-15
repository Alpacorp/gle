import { FC, MouseEvent } from "react";

import { Arrow } from "@icons/index";

interface OpenSubMenuProps {
  toggleMenu: () => void | MouseEvent<HTMLButtonElement, MouseEvent>;
  text: string;
  lang: string;
  isOpen: boolean;
  isMobile: boolean;
}

export const OpenSubMenu: FC<OpenSubMenuProps> = ({
  toggleMenu,
  text,
  lang,
  isOpen,
  isMobile,
}) => {
  return (
    <button
      onClick={toggleMenu}
      title={
        lang === "es" ? `Mostrar submenú de ${text}` : `Show submenu of ${text}`
      }
    >
      <Arrow
        className={
          isOpen
            ? "rotate-180 transition-all duration-300"
            : "transition-all duration-300"
        }
        height={isMobile ? "16" : "75"}
      />
    </button>
  );
};
