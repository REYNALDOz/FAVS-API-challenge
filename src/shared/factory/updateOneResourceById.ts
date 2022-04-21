import { Model as ModelType, ObjectId, Types } from "mongoose";

export const updateOneResourceById =
  <K>(Model: ModelType<K>) =>
  async (id: string | ObjectId, update: object): Promise<K | null> => {
    const resourceId = typeof id === "string" ? new Types.ObjectId(id) : id;
    return await Model.findOneAndUpdate(
      {
        id: resourceId,
      },
      update,
      {
        new: true,
      }
    );
  };





