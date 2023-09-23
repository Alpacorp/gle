import { useCallback, useContext, useRef, useState } from "react";
import { Context } from "@/src/app/context/Context";

const useList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowMenu } = useContext(Context);

  const submenuContainerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (!submenuContainerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen]
  );

  const handleClickMenuMobile = (link: any) => {
    if (link === "/servicios") {
      setShowMenu(true);
      setIsOpen(true);
    } else {
      setTimeout(() => {
        setShowMenu(false);
      }, 500);
    }
  };

  return {
    isOpen,
    setIsOpen,
    setShowMenu,
    toggleMenu,
    handleClickMenuMobile,
    handleOutsideClick,
    submenuContainerRef,
  };
};

export default useList;
