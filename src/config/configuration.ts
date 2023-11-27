import { config } from 'dotenv';

config();

export default () => {
  return {
    api: {
      PORT: parseInt(process.env.HTTP_PORT, 10) || 3000,
    },
    database: {
      host: process.env.POSTGRESQL_HOST,
      port: parseInt(process.env.POSTGRESQL_PORT),
      username_db: process.env.POSTGRESQL_USER,
      password: process.env.POSTGRESQL_PASSWORD,
      database: process.env.POSTGRESQL_DATABASE,
      synchronize: false,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
    cache: {
      host: process.env.CACHE_HOST,
      port: parseInt(process.env.CACHE_PORT),
    },
  };
};
