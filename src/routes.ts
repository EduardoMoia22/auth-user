import { Router } from "express";
import { AuthUserController } from "./Controllers/AuthUserController";
import { CreateUserController } from "./Controllers/CreateUserController";
import { DetailUserController } from "./Controllers/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

export const router = Router();

router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/user/detail', isAuthenticated, new DetailUserController().handle)

