import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Database is connected successfully");
    });
  } catch (error) {
    console.log(`Database failed to connect ${error}`);
  }
};

export default connectDB;
