import { Request, Response } from "express";
import { AuthUserService } from "../Services/AuthUserService";

export class AuthUserController{
  async handle(req: Request, res: Response){
    const { email, password } = req.body

    const authUserService = new AuthUserService()

    const authUser = await authUserService.execute({
      email,
      password
    })

    return res.json(authUser)
  }
}