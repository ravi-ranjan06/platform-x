import app from "./app";
import dotenv from "dotenv";
import connectMongoDB from "./config/mongo.db";

dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();
