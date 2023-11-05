import Link from "next/link";
import { FC } from "react";

interface AddressProps {
  address: string;
  className?: string;
  classNameContainer?: string;
  city: string;
  phone: string;
  phoneText?: string;
  maps: string;
  type: string;
}

export const Address: FC<AddressProps> = ({
  address,
  className,
  classNameContainer,
  city,
  phone,
  phoneText,
  maps,
  type,
}) => {
  const phoneLink = () => {
    if (type === "whatsapp") {
      return `https://api.whatsapp.com/send?phone=${phone}&text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios%20log%C3%ADsticos`;
    } else {
      return `tel:${phone}`;
    }
  };

  return (
    <div className={`text-xs max-w-[200px] w-full ${classNameContainer}`}>
      <h4 className={`uppercase font-semibold ${className}`}>{city}</h4>
      <Link href={phoneLink()} target="_blank" className="hover:text-rose-400">
        {phoneText}
      </Link>
      <br />
      <Link href={maps} target="_blank" className="hover:text-orange-400">
        {address}
      </Link>
    </div>
  );
};
