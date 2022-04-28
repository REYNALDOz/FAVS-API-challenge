import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationErrors";
import logger from "../../shared/logger/appLogger";
import { getUserById } from "../../users/controllers";
import { getOneUserByIdService } from "../../users/services/getOneUserByIdService";
import { getAllFavoritesService } from "../services/getAllFavoritesService";

export const getAllFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await getOneUserByIdService(req.userId);
    if (!user) throw new ApplicationError(401, `invalid user id`);
    const tasks = await getAllFavoritesService({
      owner: user.id,
    });
    res.status(200).json({ user,tasks });
  } catch (error: any) {
    logger.error("Error on get all projects controller", {
      instance: "controllers",
      fn: "getAllProjects",
      trace: error.message,
    });

    next(
      new ApplicationError(400, `Error getting the projects ${error.message}`)
    );
  }
};
