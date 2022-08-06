import { prismaClient } from "../prisma/prisma";
import { hash } from "bcrypt"

interface CreateUserProps{
  name: string;
  email: string;
  password: string;
}

export class CreateUserService{
  async execute({ name, email, password }: CreateUserProps){
    
    if(!email){
      throw new Error("Email Inválido")
    }
    
    const emailAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(emailAlreadyExists){
      throw new Error("Email already exists")
    }

    const hashPassword = await hash(password, 8)

    const createUser = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: hashPassword
      },
      select:{
        id: true,
        name: true,
        email: true
      }
    })

    return createUser 
  }
}