import { FC } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { ArrowCta } from '@icons/index';

interface HeroPagesPropsInterface {
  arrowColor?: 'red' | 'white';
  arrowDown?: boolean;
  className?: string;
  color?: 'red' | 'white';
  iconPath?: string | StaticImageData;
  imagePath?: string | StaticImageData;
  imagePathMobile?: string | StaticImageData;
  pageTitle: string;
}

export const HeroPages: FC<HeroPagesPropsInterface> = ({
  arrowColor = 'white',
  arrowDown,
  className,
  color,
  iconPath,
  imagePath,
  imagePathMobile = imagePath as StaticImageData,
  pageTitle,
}) => {
  return (
    <div className="relative h-auto">
      {imagePath ? (
        <Image
          src={imagePath}
          alt={pageTitle}
          height={800}
          width={1200}
          priority
          className="object-contain w-full max-[500px]:hidden"
        />
      ) : (
        <div className={`h-[15.625rem] w-full max-[400px]:h-[10.625rem]`} />
      )}
      {imagePathMobile && (
        <Image
          src={imagePathMobile}
          alt={pageTitle}
          height={500}
          width={400}
          priority
          className="object-contain w-full min-[501px]:hidden"
        />
      )}
      {(imagePath || imagePathMobile) && (
        <div
          className={`absolute z-10 inset-0 bottom-0 top-0 bg-gradient-to-t ${
            color === 'white' ? 'from-white' : 'from-main-red'
          } to-transparent bg-[length:100%_50%] bg-[center_bottom] bg-no-repeat`}
        />
      )}
      <div className="absolute z-10 bottom-0 right-0 left-0 flex flex-col justify-center items-center text-white">
        {iconPath && (
          <Image
            src={iconPath}
            alt={pageTitle}
            width={50}
            height={50}
            priority
            className="w-[3.125rem] h-[3.125rem] mb-3"
          />
        )}
        <h1
          className={`text-[2.5rem] text-center mx-2 font-semibold font-poppins max-[680px]:text-3xl max-[400px]:text-3xl max-[400px]:leading-7 ${
            color === 'white' ? 'text-black' : 'text-white'
          } ${className}`}
        >
          {pageTitle}
        </h1>
        {arrowDown && (
          <div>
            <ArrowCta
              stroke={arrowColor === 'white' ? 'white' : '#D81730'}
              className="w-10 max-[680px]:w-7 max-[680px]:h-7 max-[680px]:mt-1"
            />
          </div>
        )}
      </div>
    </div>
  );
};
