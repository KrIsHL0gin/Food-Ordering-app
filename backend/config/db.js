import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect('process.env.mongodb+srv://122krish2112:krish2604@cluster0.3mmt6.mongodb.net/')
    .then(() =>console.log("DB Connected"));
};
