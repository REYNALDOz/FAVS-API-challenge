import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationErrors";
import logger from "../../shared/logger/appLogger";
//import { CreateFavs } from "../entity/types/Fav";
import { createNewFavoriteService } from "../services/createNewFavoriteService";

export const createFavoriteController = async (
  req: Request<{}, {}, { title: string; description: string; link: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { title, description, link } = req.body;
  try {
    const newProject = await createNewFavoriteService({
      title,
      description,
      link,
      owner: req.userId,
    });
    res.status(201).json({ data: newProject });
  } catch (error: any) {
    logger.error("error on create project controller", {
      instance: "controller",
      service: "createProjectController",
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
