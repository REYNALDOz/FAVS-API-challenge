import { model } from "mongoose";
import { UserSchema } from "../schema/userSchema";
import { User } from "../types/User";

export const UserModel = model<User>("User", UserSchema);
