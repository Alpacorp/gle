export interface StatusDelivery {
  Code: number;
  Status: string;
  StatusDate: string;
  Description: string;
  type: string;
}

export interface DataTracking {
  DeliveryNumber?: string;
  ShipFromCity: string;
  ShipToCity: string;
  ShipToAddress: string;
  ShipToNeighborhood: string;
  ShipToName: string;
  ShipToPhoneNumber: string;
  WeightKg: string;
  StatusDelivery: StatusDelivery[];
}

export interface DataTracking2 {
  ALTO: null;
  ANCHO: null;
  ANOTACION: null;
  AUXILIAR: null;
  BARRIO: null;
  CANTIDAD: number;
  CEDULA: string;
  CIUDAD: string;
  CIUDADREMITENTE: string;
  CODESTADO: string;
  CODIGOIDENTIFICADOR: string;
  CODNOVEDAD: string;
  DEPARTAMENTO: string;
  DESTINATARIO: string;
  DIRECCION: string;
  DIRREMITENTE: string;
  ENBODEGA: null;
  EN_SISTEMA: Date;
  ESTADO: string;
  FACTURA: null;
  FECHAESTIMADA: Date;
  FECHA_ASIGNACION: Date;
  FECHA_DESPACHO: null;
  FECHA_OPERACION: Date;
  GPS: string;
  GUIA: string;
  HORARUTA: null;
  IDRUTA: null;
  LARGO: null;
  NOVEDAD: string;
  OBSERVACIONES: string;
  ORDEN: string;
  ORDEN_CARGUE: null;
  OUTBODEGA: null;
  PESO: number;
  PLANILLACARGUE: string;
  PRODUCTO: string;
  REMITENTE: string;
  RETORNOGUIA: null;
  SUBZONA: string;
  TELEFONO: string;
  TRUCK: string;
  USUARIO: string;
  VALOR: number;
  VENTANAINI: null;
  VOLUMEN: null;
  ZONA: string;
  get_recomendaciones: any[];
  trazabilidadExterna: TrazabilidadExterna[];
  valor_factura: null;
  valor_recaudo: number;
}

export interface TrazabilidadExterna {
  anotacion: string;
  estadoExterno: string;
  estadoPostal: string;
  fechaGestionado: Date;
}
