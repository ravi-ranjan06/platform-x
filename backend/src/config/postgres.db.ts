import { Pool } from "pg";

let pool: Pool;

export const connectPostgres = async () => {
  try {
    pool = new Pool({
      host: process.env.POSTGRES_HOST || "localhost",
      port: Number(process.env.POSTGRES_PORT) || 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      max: 10
    });

    // Test connection
    await pool.query("SELECT 1");

    console.log("PostgreSQL connected");
  } catch (error) {
    console.error("PostgreSQL connection failed", error);
    throw error;
  }
};

export const getPostgresPool = () => {
  if (!pool) {
    throw new Error("PostgreSQL pool not initialized");
  }
  return pool;
};
