import { authCreateUserService } from "../../auth/services/authCreateUserService";
import { authCreateTokenService } from "../services/authCreateTokenService";
import { ApplicationError } from "../../shared/customErrors/AplicationErrors";
import { NextFunction, Request, Response } from "express";

export const authSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    const newUser = await authCreateUserService(req.body);
    
    const token = authCreateTokenService(newUser.id);
    res.status(200).json({ msg: 'user created' });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
