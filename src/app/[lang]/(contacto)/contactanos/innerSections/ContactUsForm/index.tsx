import { FC } from 'react';

import { default as ReCAPTCHA } from 'react-google-recaptcha';

import {
  ArrowCta,
  ArrowGLE,
  Input,
  Select,
  Option,
  Loading,
} from '@ui/components';
import { LegalForm } from '@contacto/contactanos/innerSections/LegalForm';

import { ContactUsFormInterface } from '@contacto/contactanos/interfaces/contactUsFormInterface';

import dataSubjectContact from '@contacto/contactanos/innerSections/ContactUsForm/data/dataSubjectContact.json';
import dataDocumentType from '@contacto/contactanos/innerSections/ContactUsForm/data/dataDocumentType.json';

export const ContactUsForm: FC<ContactUsFormInterface> = ({
  email,
  fullname,
  handleInputChange,
  handleSubmit,
  idNumber,
  lang,
  message,
  setReCaptchaToken,
  statusLoading,
  subject,
  typeDoc,
}) => {
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

  return (
    <div className="relative pt-40 text-white">
      <h3 className="text-2xl font-poppins font-semibold my-7">
        {lang === 'es' ? 'Escríbenos' : 'Write Us'}
      </h3>
      <form
        className="flex flex-col flex-wrap gap-4 mt-11 px-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col flex-wrap gap-5 max-w-[31.25rem] mx-auto w-full">
          <div className="flex flex-wrap gap-5 justify-center w-full">
            <div className="w-full">
              <label htmlFor="fullname" className="text-base font-poppins">
                {lang === 'es' ? 'Nombre completo' : 'Full name'}
              </label>
              <div className="mt-1">
                <Input
                  handleInputChange={handleInputChange}
                  value={fullname}
                  id="fullname"
                  name="fullname"
                  placeholder={
                    lang === 'es'
                      ? 'Ingresa tu nombre completo'
                      : 'Enter your full name'
                  }
                  type="text"
                  required
                  variant="gray"
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-base font-poppins leading-none"
              >
                {lang === 'es' ? 'Correo electrónico' : 'Email'}
              </label>
              <div className="mt-1">
                <Input
                  handleInputChange={handleInputChange}
                  id="email"
                  name="email"
                  placeholder={
                    lang === 'es'
                      ? 'Ingresa tu correo electrónico'
                      : 'Enter your email'
                  }
                  required
                  type="email"
                  value={email}
                  variant="gray"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="subject" className="text-base font-poppins">
              {lang === 'es' ? 'Asunto' : 'Subject'}
            </label>
            <div className="mt-[0.125rem] w-full">
              <Select
                handleInputChange={handleInputChange}
                id="subject"
                name="subject"
                subject={subject}
                required
                className="w-full text-white"
              >
                {dataSubjectContact.map(({ id, valueEn, valueEs }) => (
                  <Option
                    color="white"
                    key={id}
                    value={lang === 'es' ? valueEs : valueEn}
                  >
                    {lang === 'es' ? valueEs : valueEn}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="typeDoc" className="text-base font-poppins">
              {lang === 'es' ? 'Tipo de Identificación' : 'Type of ID'}
            </label>
            <div className="mt-[0.125rem] w-full">
              <Select
                handleInputChange={handleInputChange}
                id="typeDoc"
                name="typeDoc"
                subject={typeDoc}
                required
                className="w-full text-white"
              >
                {dataDocumentType.map(({ id, valueEn, valueEs }) => (
                  <Option
                    color="white"
                    key={id}
                    value={lang === 'es' ? valueEs : valueEn}
                  >
                    {lang === 'es' ? valueEs : valueEn}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="idNumber" className="text-base font-poppins">
              {lang === 'es' ? 'Número de Identificación' : 'ID Number'}
            </label>
            <div className="mt-1">
              <Input
                handleInputChange={handleInputChange}
                id="idNumber"
                name="idNumber"
                placeholder={
                  lang === 'es'
                    ? 'Ingresa el número de identificación'
                    : 'Enter the ID number'
                }
                required
                type="number"
                inputMode="numeric"
                value={idNumber}
                variant="gray"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[31.25rem] mx-auto">
          <div>
            <label
              htmlFor="message"
              className="text-base font-poppins leading-none"
            >
              {lang === 'es'
                ? 'Déjanos tu mensaje aquí'
                : 'Leave us your message here'}
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
        <div className="mx-auto h-[8.5rem]">
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token: string | null) => setReCaptchaToken(token ?? '')}
            size="compact"
          />
        </div>
        <div className="m-auto mt-5">
          <button
            className="bg-main-red flex border-2 border-secondary-gray w-full rounded-lg px-10 py-2 text-white hover:bg-slate-600 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-secondary-pink disabled:text-main-pink disabled:border disabled:hover:bg-slate-400"
            disabled={
              fullname === '' ||
              email === '' ||
              subject === '' ||
              subject === 'Select' ||
              subject === 'Seleccionar' ||
              message === '' ||
              typeDoc === '' ||
              typeDoc === 'Select' ||
              typeDoc === 'Seleccionar' ||
              idNumber === 0
            }
          >
            {statusLoading ? (
              <div className="w-[4.188rem] flex justify-center">
                <Loading open={statusLoading} />
              </div>
            ) : (
              <>
                <ArrowCta className="h-6 w-6 -rotate-90" stroke="white" />
                {lang === 'es' ? 'Enviar' : 'Send'}{' '}
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
