import { findAllResources } from "../../shared/factory/findAllResources";

import logger from "../../shared/logger/appLogger";
import { FavoriteModel } from "../entity/models/favoriteModel";
import { Favorite } from "../entity/types/Fav";

export const getAllFavoritesService = async (query: any): Promise<Favorite[]> => {
  try {
    const projects: Favorite[] = await findAllResources(FavoriteModel)(query);
    return projects;
  } catch (error: any) {
    logger.error("error getting all the projects", {
      instance: "services",
      fn: "getAllProjectsService",
      trace: error.message,
    });
    throw new Error(`error getting all the projects${error.message}`);
  }
};
