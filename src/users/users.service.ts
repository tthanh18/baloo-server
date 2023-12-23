import { Injectable } from '@nestjs/common'
import { Prisma, User, Role } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { UserRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(private repository: UserRepository) {}

  async createUser(data: any) {
    console.log(data)
    // const user = await this.repository.create({
    //   username: data.username,
    // })
    // return user
  }

  async getUsers() {
    return this.repository.getUsers({})
  }
}
