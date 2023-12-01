'use client';

import { useState } from 'react';
import { NextPage } from 'next';

import { HeroPages } from '@ui/components';
import {
  AttentionLine,
  CareChannels,
  ChannelsTitle,
  ContactUsForm,
  Locations,
  OpeningHours,
} from '@contacto/contactanos/innerSections/index';
import StickyTracking from '@ui/components/StickyTracking';

import { useForm } from '@hooks/useForm';
import { useSendInfoContact } from '@/src/app/[lang]/(contacto)/contactanos/hooks/useSendInfoContact';

import { LangInterface } from '@constans/interfaces/langInterface';

export const Contact: NextPage<LangInterface> = ({ lang }) => {
  const [statusLoading, setStatusLoading] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState('');

  const [formValues, handleInputChange, reset] = useForm({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });

  const { fullname, email, subject, message } = formValues;

  const { handleSubmit } = useSendInfoContact({
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
        pageTitle={lang === 'es' ? 'Contáctanos' : 'Contact us'}
        color="white"
        className="leading-none"
      />
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
      <div className="mt-20">
        <ChannelsTitle lang={lang} />
        <AttentionLine lang={lang} />
        <OpeningHours lang={lang} />
        <CareChannels lang={lang} />
        <Locations />
      </div>
      <StickyTracking lang={lang} />
    </section>
  );
};
