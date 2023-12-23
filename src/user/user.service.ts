import { Injectable } from '@nestjs/common';
import { Prisma, User, Role } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(
    // private prisma: PrismaService
    ) { }

  //repository pattern
  // async users(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.UserWhereUniqueInput;
  //   where?: Prisma.UserWhereInput;
  //   orderBy?: Prisma.UserOrderByWithRelationInput;
  // }): Promise<User[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.user.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }

  // async createUser(data: Prisma.UserCreateInput): Promise<User> {
  //   const user = await this.prisma.user.create({
  //     data,
  //   });

  //   console.log(Role.ADMIN)

  //   return user
  // }
}
