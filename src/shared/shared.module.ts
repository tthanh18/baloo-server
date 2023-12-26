import { Global, Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

import { ConfigModule } from './config/config.module'
import { EncryptModule } from './encrypt/encrypt.module'
import { PrismaModule } from './prisma/prisma.module'

@Global()
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'file-manager'),
      serveRoot: '/file-manager',
      serveStaticOptions: {
        cacheControl: false,
      },
    }),
    ConfigModule,
    PrismaModule,
    EncryptModule,
  ],
})
export class SharedModule {}
