import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class AppService {
  ping() {
    return 'pong'
  }
}
