import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationErrors";
import Logger from "../../shared/logger/appLogger";
import * as yup from "yup";

export const bodyRequestValidators =
  (schema: yup.ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
      });
      next();
    } catch (error: any) {
      Logger.error(`error validating body request ${error.message}`, {
        instace: "middlewares schema validation",
        fn: "bodyRequestValidators",
        trace: error.message,
      });

      next(new ApplicationError(403, error.message, "validation"));
    }
  };
