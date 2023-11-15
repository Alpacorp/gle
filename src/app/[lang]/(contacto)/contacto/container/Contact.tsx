"use client";

import { FC, useState } from "react";

import { LangInterface } from "@constans/interfaces/langInterface";
import { HeroPages } from "@ui/components";
import {
  AttentionLine,
  CareChannels,
  ChannelsTitle,
  ContactUsForm,
  Locations,
  OpeningHours,
} from "@contacto/contacto/innerSections/index";
import StickyTracking from "@ui/components/StickyTracking";

import { useForm } from "@hooks/useForm";
import { useSendInfo } from "@contacto/contacto/hooks/useSendInfo";

export const Contact: FC<LangInterface> = ({ lang }) => {
  const [statusLoading, setStatusLoading] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState("");

  const [formValues, handleInputChange, reset] = useForm({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const { fullname, email, subject, message } = formValues;

  const { handleSubmit } = useSendInfo({
    formValues,
    lang,
    reCaptchaToken,
    reset,
    setStatusLoading,
  });

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
        <ChannelsTitle lang={lang} />
        <AttentionLine lang={lang} />
        <OpeningHours lang={lang} />
        <CareChannels lang={lang} />
        <Locations />
      </div>
      <ContactUsForm
        lang={lang}
        handleSubmit={handleSubmit}
        fullname={fullname}
        handleInputChange={handleInputChange}
        email={email}
        subject={subject}
        message={message}
        setReCaptchaToken={setReCaptchaToken}
        statusLoading={statusLoading}
      />
      <StickyTracking lang={lang} />
    </section>
  );
};
