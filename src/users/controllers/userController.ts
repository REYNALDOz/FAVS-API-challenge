import { NextFunction, Request, Response } from "express";
import Logger from "../../shared/logger/appLogger";
import { ApplicationError } from "../../shared/customErrors/AplicationErrors";
import { getAllUsersService } from "../../users/services/getAllUserService";
import { getOneUserByIdService } from "../../users/services/getOneUserByIdService";
import { UserModel } from "../../users/entity/models/userModel";
//import { sendEmail } from "../../shared/services/sendEmailService";

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //sendEmail();
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    Logger.error("error", "hello", { message: error.message });
    next(new ApplicationError(400, "error getting the users"));
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    //const all = await getUserWithProjectsAndTasksService(id);
    const user = await getOneUserByIdService(id);
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};

export const editUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    users: req.body,
  });
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.deleteOne({ _id: userId });
    res.status(200).json("user successfully deleted");
  } catch (error: any) {
    next(error);
  }
};
