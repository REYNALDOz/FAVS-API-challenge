import Logger from "../../shared/logger/appLogger";
import { UserModel } from "../../users/entity/models/userModel";
import { encryptPassword } from "../../auth/utils/passwordManager";
import { createResource } from "../../shared/factory/createResource";
import { CreateUser, User } from "../../users/entity/types/User";

export const authCreateUserService = async (
  userRequest: CreateUser
): Promise<User> => {
  try {
    //console.log(`HOLAAAAAAAAAAAAAAPAPO${userRequest.email}`);
    userRequest["password"] = await encryptPassword(userRequest.password);
    console.log(userRequest);
    //console.log(`HOLAAAAAAAAAAAAAAPASWORD${userRequest.password}`);
    const user = await createResource(UserModel)(userRequest);
    return user as User;
  } catch (error: any) {
    Logger.error(`error creating user with email ${userRequest.email}`, {
      service: "authCreateUserService",
      trace: error.message,
    });
    throw new Error(`error creating user with email ${userRequest.email}`);
  }
};
