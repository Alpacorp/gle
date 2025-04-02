type Environment = 'localhost' | 'dev' | 'production';

interface AppConfig {
  ENVIRONMENT: Environment;
  BASE_URL: string;
}

const getEnvVariable = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`❌ Falta la variable de entorno: ${key}`);
  }
  return value;
};

const getBaseUrl = (): string => {
  const env = getEnvVariable('NEXT_PUBLIC_ENVIRONMENT') as Environment;

  switch (env) {
    case 'localhost':
      return getEnvVariable('NEXT_PUBLIC_LOCAL_URL');
    case 'dev':
      return getEnvVariable('NEXT_PUBLIC_DEV_URL');
    case 'production':
      return getEnvVariable('NEXT_PUBLIC_PROD_URL');
    default:
      throw new Error(`❌ NEXT_PUBLIC_ENVIRONMENT '${env}' no es válido`);
  }
};

export const config: AppConfig = {
  ENVIRONMENT: getEnvVariable('NEXT_PUBLIC_ENVIRONMENT') as Environment,
  BASE_URL: getBaseUrl(),
};
