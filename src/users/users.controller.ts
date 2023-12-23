import { Body, Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  async createUser(@Body() data: any) {
    return this.service.createUser(data)
  }

  @Get()
  async getUsers() {
    return this.service.getUsers()
  }
}
