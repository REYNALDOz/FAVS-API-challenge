import { Schema } from "mongoose";
import { Favorite } from "../types/Fav";

export const FavoriteSchema = new Schema<Favorite>({
  title: {
    type: String,
    required: [true, " titl is required"],
    unique: true,
    uperrcase: true,
  },
  description: {
    type: String,
    required: [true, " description is required"],
  },
  link: {
    type: String,
    required: [true, " link is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  editedAt: {
    type: Date,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "an user is required to create a favorite"],
  },
});
