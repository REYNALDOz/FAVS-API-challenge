import { model } from "mongoose";
import { FavoriteSchema } from "../schema/favoriteSchema";
import { Favorite } from "../types/Fav";

export const FavoriteModel = model<Favorite>("Favorite", FavoriteSchema);
