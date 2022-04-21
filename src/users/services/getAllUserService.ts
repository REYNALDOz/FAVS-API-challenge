import { UserModel } from "../entity/models/userModel";
import { findAllResources } from "../../shared/factory/findAllResources";
import { User } from "../entity/types/User";
import logger from "../../shared/logger/appLogger";

export const getAllUsersService = async (): Promise<User[]> => {
  try {
    const users: User[] = await findAllResources(UserModel)();
    return users;
  } catch (error: any) {
    logger.error("error getting the users", {
      service: "getAllUsersService",
      trace: error.message,
    });
    throw new Error("error getting the users");
  }
};
