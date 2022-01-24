const env = process.env;

const config = {
  db: {
    path: env.DB_FILE || '/data/database.sql',
  },
  server: {
    port: env.API_PORT || '3005',
  },
}

export = config