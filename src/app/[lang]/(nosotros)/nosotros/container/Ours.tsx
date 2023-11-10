"use client";

import { FC, useState } from "react";
import Image from "next/image";

import { ArrowCta, ArrowGLE, HeroPages } from "@ui/components/index";
import {
  bannerOurs,
  bannerOursMobile,
  philosophy,
  team,
} from "@public/assets/images/about-us/index";
import StickyTracking from "@src/app/ui/components/StickyTracking";

import gleWhite from "@public/assets/images/gle/gle-white.png";

import { LangInterface } from "@src/app/constans/interfaces/langInterface";

import dataValues from "../data/dataValues.json";
import { ValuesText } from "@/src/app/ui/components/ValuesText";
import { useForm } from "@/src/app/hooks/useForm";
import { Loading } from "@/src/app/ui/components/Loading";

export const Ours: FC<LangInterface> = ({ lang }) => {
  const [statusLoading, setStatusLoading] = useState(false);

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
    setStatusLoading(true);
    sendEmail("admin", "ours");
    reset();
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
    <>
      <HeroPages
        imagePath={bannerOurs}
        imagePathMobile={bannerOursMobile}
        pageTitle={lang === "es" ? "Nosotros" : "About us"}
        arrowDown
        arrowColor="white"
      />
      <div>
        <div className="relative">
          <div className="flex justify-center items-start px-28 bg-main-red w-full h-[380px] back-clip-path max-[744px]:px-14 max-[550px]:px-5 max-[610px]:h-[420px] max-[480px]:h-[675px] max-[380px]:px-6 max-[340px]:h-[700px]">
            <div className="flex flex-col max-w-[1000px] w-full">
              <div className="border-l-[2px] border-white my-4">
                <h2 className="ml-3 text-4xl font-poppins font-semibold text-white max-[480px]:text-2xl">
                  {lang === "es" ? "Misión" : "Mission"}
                </h2>
              </div>
              <div className="border border-white rounded-2xl">
                <p className="p-5 font-poppins text-white">
                  {lang === "es"
                    ? "Somos una empresa dedicada a la comercialización de servicios logísticos, que orienta sus esfuerzos a cumplir los acuerdos comerciales, satisfaciendo los requisitos y expectativas de nuestros clientes y partes interesadas, con talento humano competente y diligente enfocado en la gestión del riesgo, la innovación y el mejoramiento continuo de nuestros procesos."
                    : "We are a company committed to the marketing of high-quality logistical services, directing our efforts to fulfill commercial agreements, meeting the requirements and expectations of our clients and stakeholders, relying on our team of skillful and diligent  professionals which focus on risk management, innovation, and continuous improvement of our processes."}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute z-20 bottom-0 left-0">
            <ArrowGLE className="h-40 w-auto max-[480px]:h-44" />
          </div>
        </div>
        <div className="px-[120px] flex flex-col max-w-[1000px] w-full m-auto ml-0 pt-10 max-[550px]:px-5 max-[380px]:px-[24px]">
          <div className="border-l-[2px] border-main-red my-4">
            <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray max-[480px]:text-2xl">
              {lang === "es" ? "Visión" : "Vision"}
            </h2>
          </div>
          <div>
            <p className="p-5 font-poppins text-black rounded-2xl bg-red-200">
              {lang === "es"
                ? "G.L.E COLOMBIA será reconocida en el mercado nacional e internacional como una empresa de servicios logísticos innovadores, que satisface los requisitos y las expectativas de nuestros clientes y partes interesadas; a través del fortalecimiento de alianzas perdurables con proveedores confiables, talento humano comprometido y competente, con enfoque en la gestión del riesgo, tecnología adecuada y mejoramiento continuo de los procesos."
                : "G.L.E COLOMBIA will be recognized in the national and international market as an innovative logistics services company that meets the requirements and expectations of our clients and stakeholders; through the strengthening of enduring alliances with reliable suppliers, a committed and proficient team of professionals, focusing on risk  management, appropriate technology, and continuous process improvement."}
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center px-[120px] mt-14 max-[1000px]:flex-wrap max-[550px]:px-5 max-[380px]:px-[24px]">
          <div className="w-full relative">
            <Image
              src={philosophy}
              alt="valores"
              title="valores G.L.E."
              width={450}
              height={637}
              priority
              className="aspect-auto rounded-2xl max-w-[550px] w-full"
            />
            <div
              title="Valores G.L.E."
              className="absolute z-20 inset-0 bottom-0 top-0 bg-gradient-to-t from-white to-transparent bg-[length:100%_50%] bg-[center_bottom] bg-no-repeat"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <div className="border-l-[2px] border-main-red my-4">
                <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray max-[480px]:text-2xl">
                  {lang === "es" ? "Filosofía" : "Philosophy"}
                </h2>
              </div>
              <div>
                <p className="p-5 font-poppins text-white rounded-2xl bg-secondary-gray">
                  {lang === "es"
                    ? "Hacer negocios serios, en donde todas las partes interesadas salgan beneficiadas, con un enfoque de alto nivel de satisfacción de nuestros clientes y por supuesto siempre con negocios transparentes."
                    : "To build trustworthy and prosperous businesses where all stakeholders can benefit from, focusing on high levels of customer satisfaction and, of course, conducting all deals in the most transparent manner."}
                </p>
              </div>
            </div>
            <div>
              <div className="border-l-[2px] border-main-red my-4">
                <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray max-[480px]:text-2xl">
                  {lang === "es" ? "Política de Servicio" : "Service Policy"}
                </h2>
              </div>
              <div>
                <p className="p-5 font-poppins text-black rounded-2xl bg-red-200">
                  {lang === "es"
                    ? "En GLE COLOMBIA nos comprometemos a prestar servicios logísticos innovadores, personalizados, oportunos y confiables, que satisfagan los requisitos y expectativas de nuestras partes interesadas."
                    : "At GLE COLOMBIA, we are committed to providing innovative, personalized, timely, and reliable logistical services that meet the requirements and expectations of our stakeholders."}
                  <br />
                  <br />
                  {lang === "es"
                    ? "Contamos con un enfoque a la gestión del riesgo, fortaleciendo continuamente las competencias del talento humano, con tecnología confiable y mejorando continuamente los procesos."
                    : "We focus on risk management, continuously strengthening the competencies of our talented personnel, always relying on cutting edge technology and constantly improving our business processes."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[120px] mt-10 max-[550px]:px-5">
          <div className="border-l-[2px] border-main-red my-4">
            <h2 className="ml-3 text-4xl font-poppins font-semibold text-secondary-gray">
              {lang === "es" ? "Valores Corporativos" : "Corporate Values"}
            </h2>
          </div>
          <div className="flex flex-wrap justify-around items-center gap-6 mt-11 max-[550px]:justify-start">
            {dataValues.map(({ id, descriptionEs, descriptionEn }) => (
              <ValuesText
                key={id}
                text={lang === "es" ? descriptionEs : descriptionEn}
                index={id}
              />
            ))}
          </div>
        </div>
        <div className="mt-28">
          <div className="text-center m-auto">
            <Image
              src={team}
              alt="Equipo de trabajo G.L.E."
              title="Equipo de trabajo G.L.E."
              width={1200}
              height={410}
              priority
              className="w-full"
            />
            <div className="bg-main-red py-6">
              <h2 className="text-4xl font-poppins font-semibold ml-3 text-white max-[550px]:text-xl">
                {lang === "es" ? "Trabaja con Nosotros" : "Work with us"}
              </h2>
            </div>
            <Image
              src={gleWhite}
              alt="Gle grupo logístico especializado"
              width={340}
              height={100}
              priority
              className="relative aspect-auto -top-60 right-0 left-0 m-auto w-auto max-[680px]:-top-40 max-[680px]:w-[200px] max-[380px]:-top-32 max-[380px]:w-[150px]"
            />
          </div>
        </div>
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
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-main-gray"
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
                    <input
                      id="department"
                      name="department"
                      value={department}
                      onChange={handleInputChange}
                      type="text"
                      className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
                      required
                    />
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
                  <div className="w-[67px] h-6 flex justify-center">
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
      </div>
      <StickyTracking lang={lang} />
    </>
  );
};
