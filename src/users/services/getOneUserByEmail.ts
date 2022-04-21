import { UserModel } from "../../users/entity/models/userModel";
import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import { User } from "../entity/types/User";
import Logger from "../../shared/logger/appLogger";

export const getOneUserByEmail = async (
  email: string
): Promise<User | null> => {
  try {
    const user: User | null = await findOneResourceByField(UserModel)({
      email,
    });

    return user;
  } catch (error: any) {
    Logger.log(`error getting the user with email: ${email}`, {
      service: "getOneUserByEmail",
      trace: error.message,
    });
    throw new Error(`error getting the user with email${email}`);
  }
};
