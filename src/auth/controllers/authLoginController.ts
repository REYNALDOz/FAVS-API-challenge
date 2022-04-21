import { authLoginService } from "../../auth/services/authLoginService";
import { NextFunction, Request, Response } from "express";

export const authLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await authLoginService(req.body);
    res.status(200).json({
      token,
    });
  } catch (error) {
    next(error);
  }
};
