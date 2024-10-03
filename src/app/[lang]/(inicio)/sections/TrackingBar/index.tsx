import { FC } from 'react';

import { LangInterface } from '@constans/interfaces/langInterface';

import { useForm, useTracking } from '@hooks/index';

interface TrackingBarProps extends LangInterface {
  showText?: boolean;
  sameWindow?: boolean;
  position?: 'absolute' | 'relative';
}

export const TrackingBar: FC<TrackingBarProps> = ({
  lang,
  showText = true,
  sameWindow = false,
  position = 'absolute',
}) => {
  const enableTracking = process.env.NEXT_PUBLIC_ENABLED_MESSAGING_TRACKING;

  const [formValues, handleInputChange, reset] = useForm({
    trackingNumber: '' as string,
    trackingType: '',
  });

  const { trackingNumber, trackingType } = formValues;
  const { handleTracking } = useTracking({ lang, sameWindow });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleTracking({
      trackingNumber,
      trackingType,
      origin: 'tracking',
    });
    reset();
  };

  return (
    <section
      id="tracking"
      className={`${position} flex justify-center border-0 bottom-1 right-0 left-0`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col p-2 items-center gap-1 border-2 border-main-red mx-4 rounded-xl w-auto max-w-[45.625rem]"
      >
        <div className="flex justify-center gap-2">
          <div className="relative flex gap-2">
            <input
              id="trackingNumber"
              name="trackingNumber"
              type="text"
              value={trackingNumber}
              onChange={handleInputChange}
              className="p-2 text-xl text-center font-semibold font-poppins bg-white border-2 border-main-red rounded-sm placeholder:text-base placeholder:font-normal max-[460px]:max-w-[17.5rem] max-[460px]:w-full max-[460px]:text-sm max-[470px]:placeholder:text-sm max-[400px]:text-xs max-[400px]:placeholder:text-xs max-[320px]:text-xs max-[320px]:max-w-[7.5rem] max-[320px]:w-full"
              placeholder={lang === 'es' ? 'Número de guía' : 'Tracking number'}
              maxLength={12}
              required
            />
            <select
              id="trackingType"
              name="trackingType"
              value={trackingType}
              onChange={handleInputChange}
              className="p-2 px-1 text-base text-center font-normal font-poppins bg-white border-2 border-main-red rounded-sm placeholder:text-base placeholder:font-normal max-[460px]:max-w-[17.5rem] max-[460px]:w-full max-[460px]:text-sm max-[470px]:placeholder:text-sm max-[400px]:text-xs max-[400px]:max-w-[6.25rem] max-[400px]:w-full max-[320px]:text-xs max-[320px]:max-w-[5rem] max-[320px]:w-full"
              required
            >
              <option value="">
                {lang === 'es' ? 'Selecciona' : 'Select'}
              </option>
              <option value="packaging">
                {lang === 'es' ? 'Paquetería' : 'Courier'}
              </option>
              {enableTracking === 'true' && (
                <option value="messaging">
                  {lang === 'es' ? 'Mensajería' : 'Messaging'}
                </option>
              )}
            </select>
          </div>
          <button
            className="bg-main-red flex items-center justify-center rounded-sm py-2 px-4 text-white max-[460px]:max-w-[4.688rem] max-[460px]:w-full max-[460px]:text-sm font-poppins text-lg hover:bg-opacity-80 transition duration-300 ease-in-out hover:bg-slate-600  disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:text-gray-400"
            type="submit"
            disabled={
              trackingNumber.length < 5 ||
              trackingNumber === '' ||
              trackingType === ''
            }
            title={
              trackingNumber.length < 5 || trackingType === ''
                ? lang === 'es'
                  ? 'Complete los campos'
                  : 'Fill the fields'
                : ''
            }
          >
            {lang === 'es' ? 'Consultar' : 'Track'}
          </button>
        </div>
        {showText && (
          <h1 className="order-2 text-sm text-center text-white font-inter max-[650px]:text-xs">
            {lang === 'es'
              ? 'Realiza aquí el seguimiento de tus envíos nacionales'
              : 'Track your national shipments here'}
          </h1>
        )}
      </form>
    </section>
  );
};
