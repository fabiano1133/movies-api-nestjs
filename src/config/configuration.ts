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
      synchronize:
        process.env.NODE_ENV === 'development'
          ? true
          : process.env.POSTGRESQL_SYNCHRONYZE,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
    cache: {
      url: process.env.REDIS_URL,
      ttl: parseInt(process.env.REDIS_TTL),
    },
  };
};
