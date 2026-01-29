import mysql from "mysql2/promise";

let pool: mysql.Pool;

export const connectMySQL = async () => {
  try {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || "localhost",
      port: Number(process.env.MYSQL_PORT) || 3307,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      waitForConnections: true,
      connectionLimit: 10
    });

    // Test connection
    await pool.query("SELECT 1");

    console.log("MySQL connected");
  } catch (error) {
    console.error("MySQL connection failed", error);
    throw error;
  }
};

export const getMySQLPool = () => {
  if (!pool) {
    throw new Error("MySQL pool not initialized");
  }
  return pool;
};
