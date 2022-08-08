import { Request, Response } from "express";
import { UpdateUserInfosService } from "../Services/UpdateUserInfosService";

export class UpdateUserInfosController{
  async handle(req: Request, res: Response){
    const { name, email, password } = req.body
    const userId = req.userId

    const updateUserInfosService = new UpdateUserInfosService()

    const updateUserInfos = await updateUserInfosService.execute({
      name,
      email,
      password,
      userId
    })

    return res.json(updateUserInfos)
  }
}