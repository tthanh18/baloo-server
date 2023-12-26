import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { JWT_SECRET_KEY } from '../config/config.service'
import { IToken, TPayload } from './dto'

@Injectable()
export class EncryptService {
  constructor(private jwtService: JwtService) {}
  private readonly algorithm = 'AES-128-ECB'
  private readonly key = JWT_SECRET_KEY
  private readonly iv = crypto.randomBytes(16)

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
  }

  async comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    const check = bcrypt.compare(plainTextPassword, hashedPassword)
    return check
  }

  encrypt(text: string): string {
    const cipher = crypto.createCipheriv(this.algorithm, Buffer.from(this.key), this.iv)
    let encrypted = cipher.update(text, 'utf-8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted
  }

  decrypt(encryptedText: string): string {
    const decipher = crypto.createDecipheriv(this.algorithm, Buffer.from(this.key), this.iv)
    let decrypted = decipher.update(encryptedText, 'hex', 'utf-8')
    decrypted += decipher.final('utf-8')
    return decrypted
  }

  async generateToken(payload: TPayload): Promise<IToken> {
    const issuer = 'API_SERVER'
    const option = {
      issuer,
      subject: payload.uid,
      secret: JWT_SECRET_KEY,
    }
    payload.createdAt = new Date()
    const token = await this.jwtService.signAsync(payload, option)
    return { token: token }
  }
}
