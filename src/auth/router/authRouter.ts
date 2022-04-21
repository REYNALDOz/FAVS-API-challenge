import {
  loginUserSchema,
  signUpUserSchema,
} from "../../auth/utils/userSchemaValidators";
import Router from "express";
import { bodyRequestValidators } from "../../shared/validators/bodyRequestValidators";
import { authSignup } from "../../auth/controllers/authSignupController";
import { authLogin } from "../../auth/controllers/authLoginController";

const router = Router();

router
  .route("/signup")
  .post(bodyRequestValidators(signUpUserSchema), authSignup);
router.route("/login").post(bodyRequestValidators(loginUserSchema), authLogin);

export default router;
