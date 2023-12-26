import { Injectable } from '@nestjs/common'
import { EnvEnum, IAppConfig } from './config.type'
import developEnvs from './envs/develop.env'
import productionEnvs from './envs/production.env'
import stagingEnvs from './envs/staging.env'

require('dotenv').config()

export const ENV = Object.values(_.get(EnvEnum, process.env['ENV'], EnvEnum.DEVELOP))
  ? (process.env['ENV'] as EnvEnum)
  : EnvEnum.DEVELOP
export const ENVS: IAppConfig = _.get(
  {
    [EnvEnum.DEVELOP]: developEnvs,
    [EnvEnum.STAGING]: stagingEnvs,
    [EnvEnum.PRODUCTION]: productionEnvs,
  },
  ENV,
  productionEnvs
)
export const PORT = _.isNil(process.env['PORT']) ? 4000 : process.env['PORT']
export const JWT_SECRET_KEY = _.isNil(process.env['JWT_SECRET_KEY'])
  ? 'cG1zQDIwMjEhYXBpcw=='
  : process.env['JWT_SECRET_KEY']
export const PUBLIC_URL: string = process.env['PUBLIC_URL'] || `http://localhost:${PORT}`
export const CLIENT_URL: string = process.env['CLIENT_URL'] || `http://localhost:3000`

export const DATABASE_URL: string =
  process.env['DATABASE_URL'] || 'mongodb://localhost:27017/book-store-demo'
export const REDIS_URL = process.env['REDIS_URL'] || 'redis://localhost:6379'
export const REDIS_HOST = process.env['REDIS_HOST'] || 'localhost'
export const REDIS_PORT = Number(process.env['REDIS_PORT'] || '6379')

export const CLIENT_ID_GOOGLE =
  process.env['CLIENT_ID_GOOGLE'] ||
  '407690912840-tbh6538sscm7tcmj3s2jngfa3qgtsq21.apps.googleusercontent.com'
export const CLIENT_SECRET_GOOGLE =
  process.env['CLIENT_SECRET_GOOGLE'] || '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'
export const CLIENT_ID_FACEBOOK = process.env['CLIENT_ID_FACEBOOK'] || '879839030419973'
export const CLIENT_SECRET_FACEBOOK =
  process.env['CLIENT_ID_GOOGLE'] || 'f4ca5c3456c6898897c38714142436d2'

@Injectable()
export class ConfigService {
  ENV: EnvEnum
  envs: IAppConfig
  telegramBotToken: string
  telegramNotifyGroupId: number

  constructor() {
    this.ENV = ENV
    this.envs = ENVS
  }
}
