import logger from "../../shared/logger/appLogger";
import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";

import { FavoriteModel } from "../entity/models/favoriteModel";
import { Favorite } from "../entity/types/Fav";

export const editOneFavoriteService = async (
  userId: string,
  favoriteId: string,
  favorite: { title?: string; description?: string; link?: string }
): Promise<Favorite | null> => {
  try {
    const exists = await findOneResourceByField(FavoriteModel)({
      owner: userId,
    });
    
    if (!exists) throw new Error("the user cannot delete this proyect");
    
    const editedFavorite = await FavoriteModel.findOneAndUpdate(
      { _id: favoriteId },
      favorite
    );
    return editedFavorite;

  } catch (error: any) {
    logger.error(`error updating the project with id ${favoriteId}`, {
      instance: "services",
      fn: ";editOneProjectService",
      trace: error.message,
    });
    throw new Error(`error updating the project with id ${favoriteId}`);
  }
};
