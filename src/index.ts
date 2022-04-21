import { createDbConecction } from "./config/databaseConfig";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

createDbConecction(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT, () =>
  console.log(`Server run on port  ${process.env.PORT}`)
);
