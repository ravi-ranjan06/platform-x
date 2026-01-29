import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging line
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectMongoDB;
