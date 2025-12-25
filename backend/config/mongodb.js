import mongoose, { connect } from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connection established");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/hotel`).then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("There is problem while connecting database ");
    }
  );
};

export default connectDB;
