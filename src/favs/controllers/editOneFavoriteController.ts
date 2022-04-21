import { NextFunction, Request, Response } from "express";
import { editOneFavoriteService } from "../../favs/services/editOneFavoriteService";
import { ApplicationError } from "../../shared/customErrors/AplicationErrors";
import logger from "../../shared/logger/appLogger";


export const editOneFavorite = async (
  req: Request<
    { id: string },
    {},
    { title?: string; description?: string, link?:string }
  >,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const { title, description, link } = req.body;
    
    const favorit = await editOneFavoriteService(userId, id, {
      title,
      description,
      link,
    });

    res.status(200).json({ data: favorit });
  } catch (error: any) {
    logger.error("Error editing the project projects", {
      instance: "controllers",
      fn: "controllers",
      trace: error.message,
    });

    next(new ApplicationError(400, `ERROR REYNALDO:${error.message}`));
  }
};
