import { Model as ModelType } from "mongoose";

export const findOneResourceByField =
  <K>(Model: ModelType<K>) =>
  async <T>(field: T): Promise<any> => {
    return await Model.findOne({ ...field });
  };
