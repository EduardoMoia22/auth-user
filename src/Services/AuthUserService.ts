import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../prisma/prisma";

interface AuthUserProps {
  email: string;
  password: string;
}

export class AuthUserService{
  async execute({ email, password }: AuthUserProps  ){
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(!user){
      throw new Error("Email/Senha inválidos")
    }

    const comparePassword = await compare(password, user.password)

    if(!comparePassword){
      throw new Error("Email/Senha inválidos");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }
  }
}