'use client';

import { FC } from 'react';
import { Close, StickyTrackEs, StickyTrackEn, ArrowCta } from '@icons/index';

import useObserverTracking from '@ui/components/StickyTracking/hooks/useObserverTracking';
import { useTracking, useForm } from '@/src/app/hooks/';

interface StickyTrackingProps {
  observerActive?: boolean;
  lang: string;
  samePage?: boolean;
}

const StickyTracking: FC<StickyTrackingProps> = ({
  observerActive = false,
  lang = 'es',
  samePage = false,
}) => {
  const enableTracking = process.env.NEXT_PUBLIC_ENABLED_MESSAGING_TRACKING;

  const [showTrackingIcon, showTrackingForm, showTrackingFormHandler] =
    useObserverTracking(observerActive);

  const [formValues, handleInputChange, reset] = useForm({
    trackingNumber: '' as string,
    trackingType: '',
  });

  const { trackingNumber, trackingType } = formValues;
  const { handleTracking } = useTracking({ lang, sameWindow: samePage });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleTracking({
      trackingNumber,
      trackingType,
      origin: 'sticky-tracking',
    });
    reset();
  };

  return (
    <>
      {!showTrackingIcon && (
        <section
          className={`animate-slide-in-blurred-bottom duration-0 fixed flex items-center m-3 rounded-full shadow-sticky-shadow bottom-0 right-0 left-auto z-40 max-[430px]:bg-white max-[430px]:h-12 max-[430px]:m-0 max-[430px]:rounded-none max-[430px]:w-full max-[430px]:text-center max-[430px]:flex max-[430px]:justify-center ${
            showTrackingForm && 'bg-white rounded-l-none rounded-r-full pr-1'
          }`}
        >
          {!showTrackingForm ? (
            <button
              className="flex items-center justify-center gap-3 min-[431px]:hidden font-poppins font-medium w-full h-12"
              onClick={showTrackingFormHandler}
            >
              <ArrowCta
                stroke="#D81730"
                className="transform -rotate-90 w-7 h-5"
              />
              {lang === 'es' ? 'Rastrea tu envío' : 'Track your shipment'}
            </button>
          ) : (
            <button
              onClick={showTrackingFormHandler}
              className="ml-2 min-[431px]:hidden"
            >
              <Close className="w-6 h-6 bg-main-red" />
            </button>
          )}
          {showTrackingForm && (
            <div className="animate-fade-in-right flex justify-evenly flex-wrap items-center gap-1 mx-2 py-2 max-w-[45.625rem] w-full max-[640px]:p-2 max-[430px]:m-0 max-[380px]:p-2">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-center gap-2">
                  <div className="relative flex gap-2">
                    <input
                      type="text"
                      className="p-2 text-xl text-center font-semibold font-poppins bg-white border-2 border-main-red rounded-sm placeholder:text-base placeholder:font-normal max-[460px]:max-w-[17.5rem] max-[460px]:w-full max-[460px]:text-sm max-[470px]:placeholder:text-sm max-[400px]:text-xs max-[400px]:placeholder:text-xs max-[320px]:text-xs max-[320px]:max-w-[7.5rem] max-[320px]:w-full"
                      placeholder={
                        lang === 'es' ? 'Número de guía' : 'Tracking number'
                      }
                      name="trackingNumber"
                      id="trackingNumber"
                      value={trackingNumber}
                      onChange={handleInputChange}
                      maxLength={12}
                      required
                    />
                    <select
                      id="trackingType"
                      name="trackingType"
                      value={trackingType}
                      onChange={handleInputChange}
                      className="p-2 px-1 text-base text-center font-normal font-poppins bg-white border-2 border-main-red rounded-sm placeholder:text-base placeholder:font-normal max-[460px]:max-w-[17.5rem] max-[460px]:w-full max-[460px]:text-sm max-[470px]:placeholder:text-sm max-[400px]:text-xs max-[400px]:max-w-[100px] max-[400px]:w-full max-[320px]:text-xs max-[320px]:max-w-[5rem] max-[320px]:w-full"
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
                    className="bg-main-red flex items-center justify-center rounded-sm py-2 px-4 text-white max-[460px]:max-w-[4.688rem] max-[460px]:w-full max-[460px]:text-sm font-poppins text-lg hover:bg-opacity-80 transition duration-300 ease-in-out hover:bg-slate-600  disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:text-white"
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
              </form>
            </div>
          )}
          {lang === 'es' ? (
            <StickyTrackEs
              onClick={showTrackingFormHandler}
              className="max-[430px]:hidden"
              title="Realiza aquí el seguimiento de tus envíos nacionales"
            />
          ) : (
            <StickyTrackEn
              onClick={showTrackingFormHandler}
              className="max-[430px]:hidden"
              title="Track your national shipments here"
            />
          )}
        </section>
      )}
    </>
  );
};

export default StickyTracking;
