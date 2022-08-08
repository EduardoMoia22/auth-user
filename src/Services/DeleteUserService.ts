import { prismaClient } from "../prisma/prisma";

export class DeleteUserService{
  async execute(userId: string){
    const deleteUser =  await prismaClient.user.delete({
      where:{
        id: userId
      }
    })

    return deleteUser
  }
}