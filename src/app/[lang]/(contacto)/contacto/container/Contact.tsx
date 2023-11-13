"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { default as ReCAPTCHA } from "react-google-recaptcha";

import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import {
  ArrowCta,
  ArrowGLE,
  HeroPages,
  Location,
  WhatsAppWhite,
} from "@ui/components";
import { Address } from "@/src/app/ui/components/Footer/Address";

import data from "@ui/components/Footer/data/dataFooter.json";
import { useForm } from "@/src/app/hooks/useForm";
import StickyTracking from "@/src/app/ui/components/StickyTracking";
import { Loading } from "@/src/app/ui/components/Loading";

export const Contact: FC<LangInterface> = ({ lang }) => {
  const [statusLoading, setStatusLoading] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState("");

  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

  const [formValues, handleInputChange, reset] = useForm({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const { fullname, email, subject, message } = formValues;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (reCaptchaToken) {
      setStatusLoading(true);
      sendEmail("admin", "contact");
      setTimeout(() => {
        sendEmail("user", "contact");
      }, 5000);
      reset();
    } else {
      alert(`Por favor verifica ✅ el código captcha para continuar.`);
    }
  };

  const sendEmail = async (destination: string, origin: string) => {
    const send = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ ...formValues, lang, destination, origin }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await send.json();

    if (destination === "admin" && response.error === null) {
      alert(
        lang === "es"
          ? "Registro enviado con éxito, recibirá un correo de confirmación"
          : "Registration sent successfully, you will receive a confirmation email"
      );

      setStatusLoading(false);
    } else if (destination === "admin" && response.error !== null) {
      alert(
        lang === "es"
          ? "Error al enviar el registro, por favor intente nuevamente"
          : "Error sending the registration, please try again"
      );
      setStatusLoading(false);
    }
  };

  return (
    <section className="text-center">
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={lang === "es" ? "Contáctanos" : "Contact us"}
        color="white"
        className="leading-none"
      />
      <div>
        <h3 className="text-2xl font-poppins font-semibold my-7">
          {lang === "es" ? "Canales de Atención" : "Attention Channels"}
        </h3>
        <h4 className="text-lg font-poppins font-normal">
          <span className="text-main-red">
            {lang === "es"
              ? "LÍNEA DE ATENCIÓN SERVICIO AL CLIENTE"
              : "CUSTOMER SERVICE"}
          </span>{" "}
          {lang === "es"
            ? "por favor comunícate al teléfono:"
            : "please call the phone number:"}
        </h4>
        <Link
          href="https://api.whatsapp.com/send?phone=+573102695133&text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios%20log%C3%ADsticos"
          target="_blank"
          className="text-black font-poppins max-w-[200px] w-full mx-auto text-lg font-bold flex items-center justify-center border-main-red border-2 px-2 py-1 my-3 rounded-md hover:bg-main-red hover:text-white transition-all transition-300"
        >
          <WhatsAppWhite fill="#00000" className="mr-1" /> 3102695133
        </Link>
        <div className="flex justify-center my-8 mx-2">
          <div className="bg-third-gray max-w-[600px] w-full p-3 rounded-md font-poppins text-sm">
            <p className="font-bold">
              {lang === "es" ? "Horario de atención" : "Attention schedule"}
            </p>
            <p>
              {lang === "es"
                ? "Lunes a viernes: de 8.00 a.m. a 6:00 p.m / Sábados de 8:00 a.m. a 12:00 p.m."
                : "Monday to Friday: from 8:00 a.m. to 6:00 p.m. / Saturdays from 8:00 a.m. to 12:00 p.m."}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 items-center font-poppins">
          <h3 className="text-lg font-normal text-main-red uppercase mt-2">
            {lang === "es" ? "Página web" : "Website"}
          </h3>
          <Link
            href="https://www.glecolombia.com/"
            target="_blank"
            className="text-base font-medium font-inter border hover:scale-105 duration-100 border-third-gray rounded-md max-w-[300px] w-full"
          >
            www.glecolombia.com
          </Link>
          <h3 className="text-lg font-normal text-main-red uppercase mt-2">
            {lang === "es" ? "Correo electrónico" : "Email"}
          </h3>
          <Link
            href="mailto:contactenos@glecolombia.com"
            className="text-base font-medium font-inter border hover:scale-105 duration-100 border-third-gray rounded-md max-w-[300px] w-full"
          >
            contactenos@glecolombia.com
          </Link>
          <h3 className="text-lg font-normal text-main-red uppercase mt-2">
            {lang === "es" ? "Nuestras Sedes" : "Locations"}
          </h3>
        </div>
        <div className="flex gap-5 flex-wrap items-center justify-center my-5">
          {data.map((item) => (
            <div className="flex flex-col items-center gap-4" key={item.id}>
              <Address
                classNameContainer="font-semibold font-poppins"
                className="font-extrabold"
                key={item.id}
                city={item.city}
                phoneText={item.phoneText}
                address={item.address}
                phone={item.phone}
                type={item.type}
                maps={item.maps}
              />
              <Link
                href={item.maps}
                target="_blank"
                className="hover:scale-105 duration-200"
              >
                <Location />
              </Link>
            </div>
          ))}
        </div>
      </div>
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
                  <input
                    id="fullname"
                    name="fullname"
                    value={fullname}
                    onChange={handleInputChange}
                    type="text"
                    className="border border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-2 placeholder:text-xs"
                    placeholder={
                      lang === "es"
                        ? "Ingresa tu nombre completo"
                        : "Enter your full name"
                    }
                    required
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
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    type="email"
                    className="border border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-2 placeholder:text-xs"
                    placeholder={
                      lang === "es" ? "ejemplo@correo.com" : "example@email.com"
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-base font-poppins">
                  {lang === "es" ? "Asunto" : "Subject"}
                </label>
                <div className="mt-[2px]">
                  <select
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={handleInputChange}
                    className="border border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-2 placeholder:text-xs"
                    placeholder={
                      lang === "es"
                        ? "Déjanos tu mensaje aquí"
                        : "Leave us your message here"
                    }
                    required
                  >
                    <option value="" className="text-black">
                      {lang === "es" ? "Selecciona" : "Select a subject"}
                    </option>
                    <option
                      value={lang === "es" ? "Queja" : "Complaint"}
                      className="text-black"
                    >
                      {lang === "es" ? "Queja" : "Complaint"}
                    </option>
                    <option
                      value={lang === "es" ? "Solicitud" : "Application"}
                      className="text-black"
                    >
                      {lang === "es" ? "Solicitud" : "Application"}
                    </option>
                    <option
                      value={lang === "es" ? "Reclamo" : "Claim"}
                      className="text-black"
                    >
                      {lang === "es" ? "Reclamo" : "Claim"}
                    </option>
                    <option
                      value={
                        lang === "es" ? "Felicitaciones" : "Congratulations"
                      }
                      className="text-black"
                    >
                      {lang === "es" ? "Felicitaciones" : "Congratulations"}
                    </option>
                    <option
                      value={lang === "es" ? "Asesoria Comercial" : "Business"}
                      className="text-black"
                    >
                      {lang === "es" ? "Asesoria Comercial" : "Business"}
                    </option>
                  </select>
                </div>
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
                  className="border border-white bg-transparent rounded-md focus:outline-main-gray focus:ring-2 focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray-2 placeholder:text-xs w-full"
                  rows={8}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-[500px] w-full mx-auto text-sm text-left">
            <p>
              {lang === "es"
                ? "Con el diligenciamiento del formulario autorizas el tratamiento de datos personales de acuerdo con la ley Estatutaria 1581, puedes consultar aquí:"
                : "With the completion of the form you authorize the processing of personal data in accordance with Statutory Law 1581, you can check here:"}{" "}
              <Link
                href={
                  lang === "es"
                    ? `/${lang}/proteccion-datos-personales`
                    : `/${lang}/personal-data-protection`
                }
                className="text-gray-400 hover:underline"
                target="_blank"
              >
                {lang === "es"
                  ? "Política de Tratamiento de Datos Personales"
                  : "Personal Data Treatment Policy"}
              </Link>
            </p>
            <p>
              {lang === "es"
                ? "Conoce el procedimiento de Compensaciones"
                : "Know the Compensation procedure"}{" "}
              <Link
                href={
                  lang === "es"
                    ? `/${lang}/compensaciones`
                    : `/${lang}/compensations`
                }
                className="text-gray-400 hover:underline"
              >
                {lang === "es" ? "aquí" : "here"}
              </Link>
            </p>
          </div>
          <div className="mx-auto h-[136px]">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token: string | null) =>
                setReCaptchaToken(token ?? "")
              }
              size="compact"
            />
          </div>
          <div className="m-auto mt-5">
            <button
              className="bg-main-red flex border-2 border-secondary-gray w-full rounded-lg px-10 py-2 text-white hover:bg-slate-600 transition duration-300 ease-in-out disabled:cursor-not-allowed"
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
      <StickyTracking lang={lang} />
    </section>
  );
};
