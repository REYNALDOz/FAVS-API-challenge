import { getOneUserByEmail } from "../../users/services/getOneUserByEmail";
import { LoginUser } from "../../users/entity/types/User";
import { validatePassword } from "../../auth/utils/passwordManager";
import { createAuthToken } from "../../auth/utils/tokenManager";
import Logger from "../../shared/logger/appLogger";

export const authLoginService = async (userRequest: LoginUser) => {
  try {
    const user = await getOneUserByEmail(userRequest.email);

    if (!user) throw new Error("user email or password is incorrect");

    const auth = await validatePassword(userRequest.password, user.password);

    if (!auth) throw new Error("user email or password is incorrect");

    const authToken = createAuthToken({ id: user.id });

    return {
      authToken,
    };
  } catch (error: any) {
    Logger.error("Error login user", {
      instance: "services",
      fn: "authLoginService",
      trace: error.message,
    });
    throw new Error(error);
  }
};
