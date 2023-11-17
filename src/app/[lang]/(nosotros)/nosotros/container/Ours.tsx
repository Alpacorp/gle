"use client";

import { FC, useState } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

import { ArrowCta, HeroPages, Loading } from "@ui/components/index";
import {
  bannerOurs,
  bannerOursMobile,
  team,
} from "@public/assets/images/about-us/index";
import StickyTracking from "@ui/components/StickyTracking";
import gleWhite from "@public/assets/images/gle/gle-white.png";

import { LangInterface } from "@constans/interfaces/langInterface";

import { useForm } from "@hooks/useForm";

import {
  Mission,
  Vision,
  Philosophy,
  CorporateValues,
  WorkWithUsImage,
} from "@nosotros/nosotros/innerSections/";

export const Ours: FC<LangInterface> = ({ lang }) => {
  const [statusLoading, setStatusLoading] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState("");

  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    department: "",
    cv: "",
  });

  const { name, email, address, city, phone, department, cv } = formValues;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (reCaptchaToken) {
      setStatusLoading(true);
      sendEmail("admin", "ours");
      reset();
    } else {
      alert(`Por favor verifica ✅ el código captcha para continuar.`);
    }
  };

  const sendEmail = async (destination: string, origin?: string) => {
    const send = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        ...formValues,
        lang,
        destination,
        origin,
        subject: lang === "es" ? "Formulario Vacantes" : "Vacancies Form",
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await send.json();

    if (destination === "admin" && response.error === null) {
      alert(
        lang === "es"
          ? "Registro enviado con éxito, en caso de ser seleccionado(a) nos comunicaremos contigo. Gracias."
          : "Registration sent successfully, in case of being selected we will contact you. Thank you."
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
    <section>
      <HeroPages
        imagePath={bannerOurs}
        imagePathMobile={bannerOursMobile}
        pageTitle={lang === "es" ? "Nosotros" : "About us"}
        arrowDown
        arrowColor="white"
      />
      <section>
        <Mission lang={lang} />
        <Vision lang={lang} />
        <Philosophy lang={lang} />
        <CorporateValues lang={lang} />
        <WorkWithUsImage lang={lang} />
        <div className="flex flex-col flex-wrap justify-center items-center">
          <h3 className="font-poppins">
            {lang === "es"
              ? "Únete a nuestra gran familia G.L.E."
              : "Join our great G.L.E. family"}
          </h3>
          <form
            className="flex flex-col flex-wrap gap-4 mt-11"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col flex-wrap gap-5">
              <div className="flex flex-wrap gap-5 justify-center">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-poppins text-secondary-gray leading-none"
                  >
                    {lang === "es" ? "Correo:" : "Email:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      type="email"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    {lang === "es"
                      ? "Nombre y Apellido:"
                      : "First and Last Name:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      type="text"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="address"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    {lang === "es" ? "Dirección:" : "Address:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      name="address"
                      value={address}
                      onChange={handleInputChange}
                      type="text"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 justify-center">
                <div>
                  <label
                    htmlFor="city"
                    className="text-base font-poppins text-secondary-gray leading-none"
                  >
                    {lang === "es" ? "Ciudad:" : "City:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="city"
                      name="city"
                      value={city}
                      onChange={handleInputChange}
                      type="text"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    {lang === "es" ? "Teléfono:" : "Phone:"}
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      type="number"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="department"
                    className="text-base font-poppins text-secondary-gray"
                  >
                    {lang === "es" ? "Proceso:" : "Department:"}
                  </label>
                  <div className="mt-1">
                    <select
                      id="department"
                      name="department"
                      value={department}
                      onChange={handleInputChange}
                      className="border w-full border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                      required
                    >
                      <option value="" className="text-black">
                        {lang === "es" ? "Selecciona" : "Select a subject"}
                      </option>
                      <option
                        value={lang === "es" ? "Operaciones" : "Operations"}
                        className="text-black"
                      >
                        {lang === "es" ? "Operaciones" : "Operations"}
                      </option>
                      <option
                        value={
                          lang === "es"
                            ? "Servicio al cliente"
                            : "Customer service"
                        }
                        className="text-black"
                      >
                        {lang === "es"
                          ? "Servicio al cliente"
                          : "Customer service"}
                      </option>
                      <option
                        value={lang === "es" ? "Comercial" : "Commercial"}
                        className="text-black"
                      >
                        {lang === "es" ? "Comercial" : "Commercial"}
                      </option>
                      <option
                        value={
                          lang === "es" ? "RRHH y Calidad" : "HR and Quality"
                        }
                        className="text-black"
                      >
                        {lang === "es" ? "RRHH y Calidad" : "HR and Quality"}
                      </option>
                      <option
                        value={
                          lang === "es" ? "Administrativo" : "Administrative"
                        }
                        className="text-black"
                      >
                        {lang === "es" ? "Administrativo" : "Administrative"}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-auto">
              <label
                htmlFor="cv"
                className="text-base font-poppins text-secondary-gray"
              >
                {lang === "es" ? "Link de tu CV:" : "Link to your CV:"}
              </label>
              <div className="mt-1">
                <input
                  id="cv"
                  name="cv"
                  value={cv}
                  onChange={handleInputChange}
                  type="url"
                  className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                  required
                />
              </div>
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
                  name === "" ||
                  email === "" ||
                  address === "" ||
                  city === "" ||
                  phone === "" ||
                  department === "" ||
                  cv === ""
                }
                type="submit"
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
        </div>
      </section>
      <StickyTracking lang={lang} />
    </section>
  );
};
