import { ReactNode } from "react";

export interface SelectPropsInterface {
  handleInputChange: (e: any) => void;
  subject: string;
  name: string;
  id: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  children: ReactNode;
}
