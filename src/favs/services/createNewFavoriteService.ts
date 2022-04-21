import { createResource } from "../../shared/factory/createResource";
import logger from "../../shared/logger/appLogger";

import { FavoriteModel } from "../entity/models/favoriteModel";
import { CreateFavs, Favorite } from "../entity/types/Fav";

export const createNewFavoriteService = async (
  projectRequest: CreateFavs
): Promise<Favorite> => {
  try {
    const project = await createResource(FavoriteModel)(projectRequest);
    return project as Favorite;
  } catch (error: any) {
    logger.error("error creating a new project service", {
      instance: "services",
      service: "createNewProjectService",
      trace: error.message ? error.message : "",
    });
    throw new Error(`Error creating a new project ${error.message}`);
  }
};
