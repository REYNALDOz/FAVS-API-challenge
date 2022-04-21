import express, { Application, NextFunction, Request, Response } from "express";
import authRouter from "./auth/router/authRouter";
import userRoutes from "./users/routes/userRoutes";
import favoriteRoutes from "./favs/routes/favoriteRoutes";
import morgan from "./shared/logger/morganLogger";

import swaggerUI from "swagger-ui-express";
//import path from "path"
//import swaggerJsDoc from "swagger-jsdoc";
import { swaggerSpecs } from "./config/swaggerConfig";
import cors from "cors";
const app: Application = express();

app.use(cors());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
app.use(morgan);
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", favoriteRoutes);
app.use("/api/local", authRouter);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.log(err.statusCode);
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;
