import { NextFunction, Request, Response } from "express";
import logger from "../../shared/logger/appLogger";
import { deleteOneFavoriteService } from "../services/deleteOneFavoriteService";

export const deleteOneFavorite = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const result = await deleteOneFavoriteService(id, userId);

    res.status(200).json({ succes: result });
  } catch (error) {
    logger.error("Error getting projects");

    next(error);
  }
};
