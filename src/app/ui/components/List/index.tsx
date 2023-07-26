import { FC } from "react";
import Link from "next/link";

interface ListProps {
  key: number;
  text: string;
  link: string;
}

export const List: FC<ListProps> = ({ key, text, link }) => {
  return (
    <li
      key={key}
      className="p-4 border-b-2 border-main-red border-opacity-0 hover:border-opacity-100 hover:text-main-red duration-200 cursor-pointer active font-normal"
    >
      <Link href={link}>{text}</Link>
    </li>
  );
};
