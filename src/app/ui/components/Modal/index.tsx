"use client";

import React, { FC } from "react";
import { ArrowCta, Play } from "..";
import { LangInterface } from "@/src/app/constans/interfaces/langInterface";
import { useModal } from "./hooks/useModal";

export const Modal: FC<LangInterface> = ({ lang }) => {
  const {
    showModal,
    closeModal,
    handleBackdropClick,
    playVideo,
    pauseVideo,
    videoRef,
    isVideoPlaying,
  } = useModal();

  return (
    <>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center cursor-crosshair justify-center bg-gray-200 bg-opacity-70 z-50"
          onClick={handleBackdropClick}
        >
          <div className="cursor-auto">
            <h2 className="text-3xl font-semibold !leading-7 mb-2 text-center font-poppins max-[480px]:text-2xl">
              {lang === "es" ? "Bienvenido(a) a" : "Welcome to"}{" "}
              <span className="text-main-red">glecolombia.com</span>
            </h2>
            <div className="flex justify-center gap-3 items-center mb-3 max-[550px]:flex-col-reverse">
              <ArrowCta stroke="#D81730" className="w-6 h-4" />
              <h3 className="text-xl text-center font-semibold !leading-5 font-poppins max-[480px]:text-lg">
                {lang === "es"
                  ? "Te invitamos a conocer nuestra razón de ser"
                  : "We invite you to know our reason for being"}
              </h3>
            </div>
            <div>
              <video
                ref={videoRef}
                controls
                autoPlay
                className="rounded-md w-full aspect-video"
                onPlay={playVideo}
                onPause={pauseVideo}
              >
                <source
                  src="https://upaledigital.com/GLE/GrupoLogisticoEspecializado.mp4"
                  type="video/mp4"
                />
              </video>
              {isVideoPlaying ? null : (
                <button
                  onClick={playVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full max-[450px]:hidden"
                >
                  <Play title="Reproducir" className="w-20" />
                </button>
              )}
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="flex items-center bg-main-red border border-white gap-3 justify-end mt-9 text-white px-2 py-1 rounded-md"
              >
                <ArrowCta stroke="white" className="-rotate-90 w-6 h-7" />
                {lang === "es" ? "Ingresar a la página" : "Enter the page"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
