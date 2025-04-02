export interface ApiResponse<T> {
  status: 'success' | 'fail';
  code: number;
  message: string;
  data: T;
}

export interface DataTracking {
  ORDEN: string;
  FECHA_DESPACHO: string | null;
  FECHAESTIMADA: string | null;
  FACTURA: string;
  CODIGOIDENTIFICADOR: string;
  GUIA: string;
  REMITENTE: string;
  DIRREMITENTE: string;
  CIUDADREMITENTE: string;
  CEDULA: string;
  DESTINATARIO: string;
  DIRECCION: string;
  BARRIO: string | null;
  CIUDAD: string;
  DEPARTAMENTO: string;
  TELEFONO: string;
  OBSERVACIONES: string;
  PRODUCTO: string;
  CANTIDAD: number;
  ZONA: string;
  SUBZONA: string;
  ORDEN_CARGUE: string | null;
  IDRUTA: string | null;
  HORARUTA: string | null;
  PESO: number;
  VOLUMEN: number | null;
  ALTO: number | null;
  LARGO: number | null;
  ANCHO: number | null;
  valor_factura: number | null;
  valor_recaudo: number;
  VALOR: number;
  VENTANAINI: string | null;
  CODESTADO: string;
  ESTADO: string;
  CODNOVEDAD: string;
  NOVEDAD: string;
  ANOTACION: string;
  AUXILIAR: string | null;
  TRUCK: string | null;
  FECHA_ASIGNACION: string | null;
  PLANILLACARGUE: string | null;
  FECHA_OPERACION: string | null;
  GPS: string;
  USUARIO: string;
  ENBODEGA: string | null;
  OUTBODEGA: string | null;
  EN_SISTEMA: string;
  RETORNOGUIA: string | null;
  manifiestoNumero: string;
  modalidadServicio: string | null;
  guiaMaestra: string | null;
  transportadora: number;
  trazabilidadExterna: TrazabilidadExterna[];
  pdfExterna: string;
  get_recomendaciones: any[];
  get_movimientos: Movimiento[];
}

export interface TrazabilidadExterna {
  estadoPostal: string;
  estadoExterno: string;
  fechaGestionado: string;
  anotacion: string;
  base64: string;
}

export interface Movimiento {
  GUIA: string;
  codEstado: string;
  Estado: string;
  codNovedad: string;
  Novedad: string;
  ANOTACION: string;
  creado: string;
}

