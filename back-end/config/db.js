import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Deu certo a conexão com o banco!");
  } catch (error) {
    console.log("NÃO Deu certo a conexão com o banco!", error);
  }
};
