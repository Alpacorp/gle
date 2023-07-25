import { FC } from "react";
import Link from "next/link";

import { GleLogo } from "@app/ui/components/GleLogo";
import { AgileLogo } from "@app/ui/components/AgileLogo";

export const Header: FC = () => {
  return (
    <header className="header sticky top-0 bg-white text-black shadow-md flex items-center justify-between px-8 py-2">
      <div>
        <Link href="/">
          <GleLogo />
        </Link>
      </div>
      <nav className="nav font-normal text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <Link href="">Inicio</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="">Nosotros</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="">Servicios</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="">Contacto</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href="">
          <AgileLogo />
        </Link>
      </div>
    </header>
  );
};
