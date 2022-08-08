import { prismaClient } from "../prisma/prisma";

interface UpdateUserInfosProps{
  name?: string;
  email?: string;
  password?: string;
  userId: string
}

export class UpdateUserInfosService{
  async execute({name, email, password, userId}: UpdateUserInfosProps){
    const updateUserInfos = await prismaClient.user.update({
      where:{
        id: userId
      },
      data:{
        name: name,
        email: email,
        password: password 
      },
      select:{
        id: true,
        name: true,
        email: true
      }
    })

    return updateUserInfos
  }
}