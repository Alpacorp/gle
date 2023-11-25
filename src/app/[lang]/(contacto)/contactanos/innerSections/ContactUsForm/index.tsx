import { FC } from "react";

import { default as ReCAPTCHA } from "react-google-recaptcha";

import {
  ArrowCta,
  ArrowGLE,
  Input,
  Select,
  Option,
  Loading,
} from "@ui/components";
import { LegalForm } from "@contacto/contactanos/innerSections/LegalForm";

import { ContactUsFormInterface } from "@contacto/contactanos/interfaces/contactUsFormInterface";

import dataSubjectContact from "@contacto/contactanos/innerSections/ContactUsForm/data/dataSubjectContact.json";

export const ContactUsForm: FC<ContactUsFormInterface> = ({
  email,
  fullname,
  handleInputChange,
  handleSubmit,
  lang,
  message,
  setReCaptchaToken,
  statusLoading,
  subject,
}) => {
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

  return (
    <div className="relative mt-10 pt-40 text-white">
      <h3 className="text-2xl font-poppins font-semibold my-7">
        {lang === "es" ? "Escríbenos" : "Write Us"}
      </h3>
      <form
        className="flex flex-col flex-wrap gap-4 mt-11 px-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col flex-wrap gap-5">
          <div className="flex flex-wrap gap-5 justify-center">
            <div>
              <label htmlFor="fullname" className="text-base font-poppins">
                {lang === "es" ? "Nombre completo" : "Full name"}
              </label>
              <div className="mt-1">
                <Input
                  handleInputChange={handleInputChange}
                  value={fullname}
                  id="fullname"
                  name="fullname"
                  placeholder={
                    lang === "es"
                      ? "Ingresa tu nombre completo"
                      : "Enter your full name"
                  }
                  type="text"
                  required
                  variant="gray"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-base font-poppins leading-none"
              >
                {lang === "es" ? "Correo electrónico" : "Email"}
              </label>
              <div className="mt-1">
                <Input
                  handleInputChange={handleInputChange}
                  id="email"
                  name="email"
                  placeholder={
                    lang === "es"
                      ? "Ingresa tu correo electrónico"
                      : "Enter your email"
                  }
                  required
                  type="email"
                  value={email}
                  variant="gray"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto">
            <label htmlFor="subject" className="text-base font-poppins">
              {lang === "es" ? "Asunto" : "Subject"}
            </label>
            <div className="mt-[2px]">
              <Select
                handleInputChange={handleInputChange}
                id="subject"
                name="subject"
                placeholder={
                  lang === "es"
                    ? "Déjanos tu mensaje aquí"
                    : "Leave us your message here"
                }
                subject={subject}
                required
              >
                {dataSubjectContact.map(({ id, valueEn, valueEs }) => (
                  <Option key={id} value={lang === "es" ? valueEs : valueEn}>
                    {lang === "es" ? valueEs : valueEn}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[500px] mx-auto">
          <div>
            <label
              htmlFor="message"
              className="text-base font-poppins leading-none"
            >
              {lang === "es"
                ? "Déjanos tu mensaje aquí"
                : "Leave us your message here"}
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleInputChange}
                className="border border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-second placeholder:text-xs w-full"
                rows={8}
                required
              />
            </div>
          </div>
        </div>
        <LegalForm lang={lang} />
        <div className="mx-auto h-[136px]">
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token: string | null) => setReCaptchaToken(token ?? "")}
            size="compact"
          />
        </div>
        <div className="m-auto mt-5">
          <button
            className="bg-main-red flex border-2 border-secondary-gray w-full rounded-lg px-10 py-2 text-white hover:bg-slate-600 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-red-400 disabled:border disabled:hover:bg-slate-400"
            disabled={
              fullname === "" ||
              email === "" ||
              subject === "" ||
              message === ""
            }
          >
            {statusLoading ? (
              <div className="w-[67px] flex justify-center">
                <Loading open={statusLoading} />
              </div>
            ) : (
              <>
                <ArrowCta className="h-6 w-6 -rotate-90" stroke="white" />
                {lang === "es" ? "Enviar" : "Send"}{" "}
              </>
            )}
          </button>
        </div>
      </form>
      <div className="absolute z-auto top-0 left-0 max-[600px]:hidden">
        <ArrowGLE className="h-full w-32 max-[480px]:h-44" />
      </div>
      <div className="absolute bottom-0 back-clip-path-inverse-bottom-form bg-secondary-gray h-full z-[-1] left-0 right-0" />
    </div>
  );
};
