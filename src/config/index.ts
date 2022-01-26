import dotenv from 'dotenv';

// 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error(".env File Not Found");
}

export default {
  db: {
    path: process.env.DB_FILE || '/data/database.sqlite',
  },
  api: {
    prefix: process.env.API_PREFIX || '/api',
    port: process.env.API_PORT || '3005',
  },
}