import { userTokenValidation } from "../../auth/middlewares/userTokenValidation";
import { Router } from "express";
import * as FavsController from "../controllers/index";
import { bodyRequestValidators } from "../../shared/validators/bodyRequestValidators";
import { createFavoriteSchema } from "../../favs/utils/favoriteValidator";
import { editFavoriteValidateSchema } from "../../favs/utils/editFavoriteSchemaValidators";

const router: Router = Router();

router
  .route("/favs")
  .get(userTokenValidation, FavsController.getAllFavorites)
  .post(
    userTokenValidation,
    bodyRequestValidators(createFavoriteSchema),
    FavsController.createFavoriteController
  );

router
  .route("/favs/:id")
  .put(
    userTokenValidation,
    bodyRequestValidators(editFavoriteValidateSchema),
    FavsController.editOneFavorite
  )
  .delete(userTokenValidation, FavsController.deleteOneFavorite);

export default router;
