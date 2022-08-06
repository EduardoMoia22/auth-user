import { Router } from "express";
import { AuthUserController } from "./Controllers/AuthUserController";
import { CreateUserController } from "./Controllers/CreateUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

export const router = Router();

router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/auth', isAuthenticated, (req, res)=>{
  res.send("Foi auth")
})

