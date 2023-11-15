export interface InputPropsInterface {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  id: string;
}
