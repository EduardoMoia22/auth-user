import { Router } from "express";
import { AuthUserController } from "./Controllers/AuthUserController";
import { CreateUserController } from "./Controllers/CreateUserController";
import { DeleteUserController } from "./Controllers/DeleteUserController";
import { DetailUserController } from "./Controllers/DetailUserController";
import { ListAllUsersController } from "./Controllers/ListAllUsersController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

export const router = Router();

router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/user/detail', isAuthenticated, new DetailUserController().handle)
router.get('/users', isAuthenticated, new ListAllUsersController().handle)
router.delete('/user/delete', isAuthenticated, new DeleteUserController().handle)

