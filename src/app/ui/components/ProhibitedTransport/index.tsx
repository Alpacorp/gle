import { FC } from "react";
import Link from "next/link";

interface ProhibitedTransportProps {
  children: string;
}

export const ProhibitedTransport: FC<ProhibitedTransportProps> = ({
  children,
}) => {
  return (
    <Link href="#" className="hover:underline hover:underline-offset-8">
      {children}
    </Link>
  );
};
