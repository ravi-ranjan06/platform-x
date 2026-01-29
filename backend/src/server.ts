import dotenv from "dotenv";
import path from "path";

// Explicit path to .env
dotenv.config({
  path: path.resolve(__dirname, "./.env"),
});

import app from "./app";
import connectMongoDB from "./config/mongo.db";

const PORT = process.env.PORT;

const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();
