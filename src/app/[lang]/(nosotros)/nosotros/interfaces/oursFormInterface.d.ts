export interface OursFormInterface {
  email: string;
  name: string;
  position: string;
  city: string;
  phone: string;
  department: string;
  cv: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  lang: string;
  setReCaptchaToken: (token: string) => void;
  statusLoading: boolean;
}
