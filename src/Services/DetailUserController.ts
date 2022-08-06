import { prismaClient } from "../prisma/prisma";

export class DetailUserService{
  async execute(userId: string){
    const user = await prismaClient.user.findFirst({
      where:{
        id: userId
      },
      select:{
        id: true,
        email: true,
        name: true
      }
    })

    return user
  }
}