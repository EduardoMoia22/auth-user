import { prismaClient } from "../prisma/prisma";

export class ListAllUsersService{
  async execute(){
    const allUsers = await prismaClient.user.findMany({
      select:{
        id: true,
        name: true,
        email: true
      }
    })

    return allUsers
  }
}