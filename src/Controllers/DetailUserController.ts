import { Request, Response } from "express";
import { DetailUserService } from "../Services/DetailUserController";

export class DetailUserController{
  async handle(req: Request, res: Response){
    const userId = req.userId

    const detailUserService = new DetailUserService()

    const detailUser = await detailUserService.execute(userId)

    res.json(detailUser)
  }
}