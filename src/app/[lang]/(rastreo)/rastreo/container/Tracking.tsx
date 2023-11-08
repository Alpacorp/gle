"use client";

import { FC, useEffect, useState } from "react";

import StickyTracking from "@src/app/ui/components/StickyTracking";

import { LangInterface } from "@src/app/constans/interfaces/langInterface";
import { useSearchParams } from "next/navigation";
import { HeroPages } from "@/src/app/ui/components";

export const Tracking: FC<LangInterface> = ({ lang }) => {
  const [dataTracking, setDataTracking] = useState([]);
  const searchParams = useSearchParams();

  console.log("dataTracking", dataTracking);

  const trackingId = searchParams.get("tracking-id");

  const getTracking = async () => {
    const trackingNumber = trackingId?.slice(0, 10);
    console.log("trackingNumber", trackingNumber);
    const sendTracking = await fetch("/api/tracking", {
      method: "POST",
      body: JSON.stringify({
        remesa: trackingNumber,
      }),
    });
    const response = await sendTracking.json();
    if (Array.isArray(response.data)) setDataTracking(response.data);
  };

  useEffect(() => {
    if (trackingId) {
      getTracking();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackingId]);

  return (
    <section>
      <HeroPages
        arrowDown
        arrowColor="red"
        pageTitle={
          lang === "es" ? "Resultados del rastreo" : "Tracking results"
        }
        color="white"
        className="leading-none"
      />
      <div className="flex justify-center mx-auto flex-col p-2 items-center gap-1 border-2 border-main-red rounded-xl w-auto max-w-[730px]">
        {dataTracking.map((item: any) => (
          <div key={item.GUIA}>
            <p>Número de órden: {item.ORDEN}</p>
            <p>Fecha de despacho: {item.FECHA_DESPACHO}</p>
            <p>Fecha estimada: {item.FECHAESTIMADA}</p>
            <p>Factura: {item.FACTURA}</p>
            <p>Código identificador: {item.CODIGOIDENTIFICADOR}</p>
            <p>Número de Guía: {item.GUIA}</p>
            <p>Nombre remitente: {item.REMITENTE}</p>
            <p>Dirección remitente: {item.DIRREMITENTE}</p>
            <p>Ciudad remitente: {item.CIUDADREMITENTE}</p>
            <p>Cédula: {item.CEDULA}</p>
            <p>Nombre destinatario: {item.DESTINATARIO}</p>
            <p>Dirección destinatario: {item.DIRECCION}</p>
            <p>Barrio: {item.BARRIO}</p>
            <p>Ciudad: {item.CIUDAD}</p>
            <p>Departamento: {item.DEPARTAMENTO}</p>
            <p>Teléfono: {item.TELEFONO}</p>
            <p>Observaciones: {item.OBSERVACIONES}</p>
            <p>Producto: {item.PRODUCTO}</p>
            <p>Cantidad: {item.CANTIDAD}</p>
            <p>Zona: {item.ZONA}</p>
            <p>Subzona: {item.SUBZONA}</p>
            <p>Orden de cargue: {item.ORDEN_CARGUE}</p>
            <p>Identificador de ruta: {item.IDRUTA}</p>
            <p>Hora de ruta: {item.HORARUTA}</p>
            <p>Peso: {item.PESO}</p>
            <p>Volumen: {item.VOLUMEN}</p>
            <p>Alto: {item.ALTO}</p>
            <p>Ancho: {item.ANCHO}</p>
            <p>Largo: {item.LARGO}</p>
            <p>Valor: {item.VALOR}</p>
            <p>Ventana: {item.VENTANAINI}</p>
            <p>Código de estado: {item.CODESTADO}</p>
            <p>Estado: {item.ESTADO}</p>
            <p>Código de novedad: {item.CODNOVEDAD}</p>
            <p>Novedad: {item.NOVEDAD}</p>
            <p>Anotación: {item.ANOTACION}</p>
            <p>Auxiliar: {item.AUXILIAR}</p>
            <p>Camión: {item.TRUCK}</p>
            <p>Fecha de asignación: {item.FECHA_ASIGNACION}</p>
            <p>Planilla de cargue: {item.PLANILLACARGUE}</p>
            <p>Fecha de operación: {item.FECHA_OPERACION}</p>
            <p>Gps: {item.GPS}</p>
            <p>Usuario: {item.USUARIO}</p>
            <p>En Bodega: {item.ENBODEGA}</p>
            <p>Fuera de Bodega: {item.OUTBODEGA}</p>
            <p>En sistema: {item.EN_SISTEMA}</p>
            <p>Guía de retorno: {item.RETORNOGUIA}</p>
          </div>
        ))}
        <StickyTracking lang={lang} />
      </div>
    </section>
  );
};
