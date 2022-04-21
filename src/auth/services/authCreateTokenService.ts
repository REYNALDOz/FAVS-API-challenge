import { createAuthToken } from "../../auth/utils/tokenManager";
import Logger from "../../shared/logger/appLogger";
import { UserIdType } from "../../users/entity/types/User";

export const authCreateTokenService = (
  userId: string | UserIdType
): { authToken: string } => {
  try {
    return {
      authToken: createAuthToken({ id: userId }),
    };
  } catch (error: any) {
    Logger.error("Error creating tokens auth token", {
      instance: "services",
      fn: "authCreateTokenService",
      trace: error.message,
    });
    throw new Error(`'Error creating tokens auth token' ${error.message}`);
  }
};
