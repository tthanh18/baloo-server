import { Global, Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { JWT_SECRET_KEY } from '../config'
import { EncryptService } from './encrypt.service'

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => ({
        global: true,
        secret: JWT_SECRET_KEY,
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [EncryptService],
  exports: [EncryptService],
})
export class EncryptModule {}
