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
import { ShippingTitle } from '@/src/app/[lang]/(contacto)/contactanos/innerSections/ShippingTitle';

import { LangInterface } from '@constans/interfaces/langInterface';
import { ShippingLine } from '@/src/app/[lang]/(contacto)/contactanos/innerSections/ShippingLine';

export const Contact: NextPage<LangInterface> = ({ lang }) => {
  const [statusLoading, setStatusLoading] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState('');

  const [formValues, handleInputChange, reset] = useForm({
    fullname: '',
    email: '',
    subject: '',
    message: '',
    typeDoc: '',
    idNumber: '',
  });

  const { fullname, idNumber, email, subject, message, typeDoc } = formValues;

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
        email={email}
        fullname={fullname}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        idNumber={idNumber}
        lang={lang}
        message={message}
        setReCaptchaToken={setReCaptchaToken}
        statusLoading={statusLoading}
        subject={subject}
        typeDoc={typeDoc}
      />
      <div className="mt-20">
        <ShippingTitle lang={lang} />
        <ShippingLine lang={lang} />
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
