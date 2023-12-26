import { applyDecorators, Controller, ControllerOptions } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'

export function PortalController({ path, version = '1', ...others }: ControllerOptions) {
  const tags = _.isArray(path) ? path.map(String) : _.isString(path) ? [path] : []

  return applyDecorators(
    Controller({ path, version, ...others }),
    ApiBearerAuth(),
    ApiTags(...tags)
  )
}
