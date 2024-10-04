import { FC } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { ArrowCta, Input, Loading, Option, Select } from '@ui/components';

import dataSubjectOurs from '@nosotros/nosotros/innerSections/OursForm/data/dataSubjectOurs.json';

import { OursFormInterface } from '@nosotros/nosotros/interfaces/oursFormInterface';

export const OursForm: FC<OursFormInterface> = ({
  city,
  cv,
  department,
  email,
  handleInputChange,
  handleSubmit,
  lang,
  name,
  phone,
  position,
  setReCaptchaToken,
  statusLoading,
}) => {
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <h3 className="font-poppins">
        {lang === 'es'
          ? 'Únete a nuestra gran familia G.L.E.'
          : 'Join our great G.L.E. family'}
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
                {lang === 'es' ? 'Correo:' : 'Email:'}
              </label>
              <div className="mt-1">
                <Input
                  handleInputChange={handleInputChange}
                  id="email"
                  name="email"
                  required
                  type="email"
                  value={email}
                  variant="red"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-base font-poppins text-secondary-gray"
              >
                {lang === 'es' ? 'Nombre y Apellido:' : 'First and Last Name:'}
              </label>
              <div className="mt-1">
                <Input
                  handleInputChange={handleInputChange}
                  id="name"
                  name="name"
                  required
                  type="text"
                  value={name}
                  variant="red"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="position"
                className="text-base font-poppins text-secondary-gray"
              >
                {lang === 'es'
                  ? 'Cargo al que aplica:'
                  : 'Position applied for:'}
              </label>
              <div className="mt-1">
                <Input
                  handleInputChange={handleInputChange}
                  id="position"
                  name="position"
                  required
                  type="text"
                  value={position}
                  variant="red"
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
                {lang === 'es' ? 'Ciudad:' : 'City:'}
              </label>
              <div className="mt-1">
                <Input
                  handleInputChange={handleInputChange}
                  id="city"
                  name="city"
                  required
                  type="text"
                  value={city}
                  variant="red"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-base font-poppins text-secondary-gray"
              >
                {lang === 'es' ? 'Teléfono:' : 'Phone:'}
              </label>
              <div className="mt-1">
                <Input
                  id="phone"
                  name="phone"
                  value={phone}
                  handleInputChange={handleInputChange}
                  type="number"
                  variant="red"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="department"
                className="text-base font-poppins text-secondary-gray"
              >
                {lang === 'es' ? 'Proceso:' : 'Department:'}
              </label>
              <div className="mt-1">
                <Select
                  id="department"
                  name="department"
                  subject={department}
                  handleInputChange={handleInputChange}
                  variant="red"
                  required
                  className="w-full"
                >
                  {dataSubjectOurs.map(({ id, valueEn, valueEs }) => (
                    <Option key={id} value={lang === 'es' ? valueEs : valueEn}>
                      {lang === 'es' ? valueEs : valueEn}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <label
            htmlFor="cv"
            className="text-base font-poppins text-secondary-gray"
          >
            {lang === 'es' ? 'Link de tu CV:' : 'Link to your CV:'}
          </label>
          <div className="mt-1">
            <Input
              className="border border-main-red focus:outline-main-red focus:ring-2 focus:ring-main-red focus:border-transparent p-2 placeholder:font-poppins placeholder-light-gray"
              handleInputChange={handleInputChange}
              id="cv"
              name="cv"
              required
              type="url"
              value={cv}
              variant="red"
            />
          </div>
        </div>
        <div className="mx-auto h-[8.5rem]">
          <ReCAPTCHA
            onChange={(token: string | null) => setReCaptchaToken(token ?? '')}
            onExpired={() => setReCaptchaToken('')}
            sitekey={RECAPTCHA_SITE_KEY}
            size="compact"
          />
        </div>
        <div className="m-auto mt-5">
          <div className="m-auto mt-5">
            <button
              className="bg-main-red flex border-2 border-secondary-gray w-full rounded-lg px-10 py-2 text-white hover:bg-slate-600 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-secondary-pink disabled:text-main-pink disabled:border disabled:hover:bg-slate-400"
              disabled={
                email === '' ||
                name === '' ||
                position === '' ||
                city === '' ||
                phone === '' ||
                department === '' ||
                cv === ''
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
        </div>
      </form>
    </div>
  );
};
