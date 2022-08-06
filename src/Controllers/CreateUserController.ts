import { Request, Response } from "express";
import { CreateUserService } from "../Services/CreateUserService";

export class CreateUserController{
  async handle(req: Request, res: Response){
    const { name, email, password } = req.body

    const createUserService = new CreateUserService()

    const createUser = await createUserService.execute({
      name,
      email,
      password
    })

    return res.json(createUser)
  }
}