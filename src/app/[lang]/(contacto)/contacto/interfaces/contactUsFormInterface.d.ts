import { LangInterface } from "@constans/interfaces/langInterface";

export interface ContactUsFormInterface extends LangInterface {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  fullname: string;
  handleInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  email: string;
  subject: string;
  message: string;
  setReCaptchaToken: (token: string) => void;
  statusLoading: boolean;
}
