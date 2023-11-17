"use client";

import { FC, useState } from "react";

import {
  Mission,
  Vision,
  Philosophy,
  CorporateValues,
  WorkWithUsImage,
  OursForm,
} from "@nosotros/nosotros/innerSections/";

import {
  bannerOurs,
  bannerOursMobile,
} from "@public/assets/images/about-us/index";
import { HeroPages } from "@ui/components/index";
import StickyTracking from "@ui/components/StickyTracking";

import { useForm } from "@hooks/useForm";

import { useSendInfoOurs } from "@nosotros/nosotros/hooks/useSendInfoOurs";

import { LangInterface } from "@constans/interfaces/langInterface";

export const Ours: FC<LangInterface> = ({ lang }) => {
  const [statusLoading, setStatusLoading] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState("");

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

  const { handleSubmit } = useSendInfoOurs({
    formValues,
    lang,
    reCaptchaToken,
    reset,
    setStatusLoading,
  });

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
        <OursForm
          lang={lang}
          handleSubmit={handleSubmit}
          name={name}
          handleInputChange={handleInputChange}
          email={email}
          address={address}
          city={city}
          phone={phone}
          department={department}
          cv={cv}
          setReCaptchaToken={setReCaptchaToken}
          statusLoading={statusLoading}
        />
      </section>
      <StickyTracking lang={lang} />
    </section>
  );
};
