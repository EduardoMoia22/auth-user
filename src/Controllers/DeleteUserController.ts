import { Request, Response } from "express";
import { DeleteUserService } from "../Services/DeleteUserService";

export class DeleteUserController{
  async handle(req: Request,  res: Response){
    const userId = req.userId

    const deleteUserService = new DeleteUserService()

    const deleteUser = await deleteUserService.execute(userId)

    return res.json({ delete: "success" })
  }
}