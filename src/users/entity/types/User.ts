import Types from "mongoose";
import { Favorite } from "../../../favs/entity/types/Fav";

export type UserIdType = {
  _id: Types.ObjectId;
};

export interface User {
  id: UserIdType;
  name: string;
  email: string;
  password: string;
  favorites?: Favorite[];
  createdAt: Date;
  editedAt: Date | null;
}

export type CreateUser = Omit<User, "id" | "createdAt" | "editedAt">;

export type LoginUser = {
  password: string;
  email: string;
};
