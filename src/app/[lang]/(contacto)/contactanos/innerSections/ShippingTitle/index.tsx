import { FC } from 'react';

import { LangInterface } from '@constans/interfaces/langInterface';

export const ShippingTitle: FC<LangInterface> = ({ lang }) => {
  return (
    <h3 className="text-2xl font-poppins font-semibold my-7">
      {lang === 'es' ? 'Información de Envíos' : 'Shipping Information'}
    </h3>
  );
};
