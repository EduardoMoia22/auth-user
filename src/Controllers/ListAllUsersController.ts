import { Request, Response } from "express";
import { ListAllUsersService } from "../Services/ListAllUsersService";

export class ListAllUsersController{
  async handle(req: Request, res: Response){
    const listAllUsersService = new ListAllUsersService()
    
    const listAllUsers = await listAllUsersService.execute()

    res.json(listAllUsers)
  }
}