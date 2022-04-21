import { Request, Response } from "express";

export const getFavorites = async (req: Request, res: Response) => {
  res.status(200).json({
    users: req.body,
  });
};

export const getFavoriteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    users: req.body,
  });
};

export const creteFavorite = async (req: Request, res: Response) => {
  res.status(200).json({
    users: req.body,
  });
};

export const editFavorite = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    users: req.body,
  });
};

export const deleteFavorite = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    users: req.body,
  });
};
