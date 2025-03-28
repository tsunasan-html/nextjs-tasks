import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || '')
  } catch {
    throw new Error("DB接続Error");
  }
}