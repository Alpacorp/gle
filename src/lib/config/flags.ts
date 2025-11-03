type FeatureFlags = {
  trackingEnabled: boolean;
  messagingTrackingEnabled: boolean;
};

const parseBoolean = (raw: any, defaultValue = false): boolean => {
  if (raw === undefined) return defaultValue;
  return String(raw).toLowerCase() === 'true';
};

// IMPORTANT: Usar accesos estáticos a process.env.NEXT_PUBLIC_* para permitir inlining en el cliente
const RAW_ENABLED_TRACKING = process.env.NEXT_PUBLIC_ENABLED_TRACKING;
const RAW_ENABLED_MESSAGING_TRACKING = process.env.NEXT_PUBLIC_ENABLED_MESSAGING_TRACKING;

export const flags: FeatureFlags = {
  // Controla toda la funcionalidad de rastreo (secciones, componentes y páginas)
  trackingEnabled: parseBoolean(RAW_ENABLED_TRACKING, true),
  // Control específico para la opción de "Mensajería" dentro del rastreo
  messagingTrackingEnabled: parseBoolean(RAW_ENABLED_MESSAGING_TRACKING, false),
};
