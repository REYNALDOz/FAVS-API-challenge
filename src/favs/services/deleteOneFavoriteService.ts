import { deleteOneResourceById } from "../../shared/factory/deleteOneResourceById";
import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import logger from "../../shared/logger/appLogger";
import { FavoriteModel } from "../entity/models/favoriteModel";

export const deleteOneFavoriteService = async (
  FavoriteId: string,
  userId: string
): Promise<boolean> => {
  try {
    const exists = await findOneResourceByField(FavoriteModel)({
      owner: userId,
    });
    
    if (!exists) throw new Error("the user cannot delete this proyect");

    const result = await deleteOneResourceById(FavoriteModel)(FavoriteId);

    return result && result?.deletedCount > 0 ? true : false;
  } catch (error: any) {
    logger.error(`error deleting project with id ${FavoriteId}`, {
      instance: "services",
      fn: "deleteOneProjectService",
      trace: error.message,
    });
    throw new Error(`error deleting project with id ${FavoriteId}`);
  }
};
