import { Model as ModelType } from "mongoose";
/* import { Token } from "../../auth/entity/schema/authTokenSchema";
import { Project } from "../../projects/entity/types/Project";
import { Task } from "../../tasks/entity/types/Task"; */
import { User } from "../../users/entity/types/User";
import { Favorite } from "../../favs/entity/types/Fav";

export const createResource =
  <K extends 
  | ModelType<User>
  | ModelType<Favorite>
>(
  Model: K
) =>
  async <T>(resource: T): Promise< User | Favorite > => {
    const newResource = new Model(resource);
    return await newResource.save();
  };
