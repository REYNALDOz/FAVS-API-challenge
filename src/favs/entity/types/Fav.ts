import Types from "mongoose";
import { UserIdType } from "../../../users/entity/types/User";

export type FavoriteIdType = {
  _id: Types.ObjectId;
};

export interface Favorite {
  id: FavoriteIdType;
  title: string;
  description: string;
  link: string;
  createdAt: Date;
  editedAt: Date | null;
  owner: UserIdType;
}

export type CreateFavorite = Omit<Favorite, "id" | "createdAt" | "editedAt">;

export type CreateFavs= {
  title: string;
  description:string,
  link:string,
  owner: string;
};
