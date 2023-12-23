import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/db/prisma/prisma.module'
import { UserRepository } from './users.repository'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [PrismaService, UserRepository, UsersService],
})
export class UsersModule {}
