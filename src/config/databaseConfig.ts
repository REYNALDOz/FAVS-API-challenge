import mongoose from "mongoose";

export const createDbConecction = (dbURL: string) => {
  mongoose
    .connect(dbURL)
    .then(() => console.log("connected"))
    .catch((err) => console.log("error on connected :" + err));
  mongoose.connection.on("error", () => console.log("error on db conecction"));
  mongoose.connection.once("connected", () => console.log("db connected"));
};
