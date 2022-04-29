import { mockFavorite } from "./mockFavorite";

export const mockCreateFavorite = {
  ...mockFavorite,
  favs: expect.any(Array),
  __v: expect.any(Number),
  _id: expect.any(String),
  id: expect.any(String),
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
};
