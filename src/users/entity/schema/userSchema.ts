import { Schema } from "mongoose";
import { User } from "../types/User";
import { FavoriteModel } from "../../../favs/entity/models/favoriteModel";

export const UserSchema = new Schema<User>({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, " email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, " password is required"],
    minlength: 5,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  editedAt: {
    type: Date,
  },
});

UserSchema.virtual("favs", {
  ref: "Favorite",
  localField: "_id",
  foreignField: "owner",
});

/* UserSchema.pre("deleteOne", { document: true }, async function (next) {
  console.log(this.getFilter());
  const user = this.getFilter();
  await FavoriteModel.deleteMany({ owner: user.id });
  next();
}); */

UserSchema.set("toJSON", { virtuals: true });
UserSchema.set("toObject", { virtuals: true });
