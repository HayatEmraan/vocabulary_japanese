import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DB_URL,
  ALGO: process.env.ENC_ALGO,
  SECRET: process.env.ENC_SECRET,
};