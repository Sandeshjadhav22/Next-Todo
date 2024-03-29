import mongoose from "mongoose";
export const ConnectDb = async() => {
  await  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "next-Todo",
    })
    .then(() => {
      console.log("Connection to databse");
    })
    .catch((err) => {
      console.log(`Some error to connecte database: ${err}`);
    });
} 