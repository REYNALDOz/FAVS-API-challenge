import { Router } from "express";
import {
  deleteUser,
  editUser,
  getUserById,
  getUsers,
} from "../controllers/userController";

const router: Router = Router();

/**
 * @swagger
 * /users:
 *  get:
 *   summary: Return a task list
 */

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

export default router;
