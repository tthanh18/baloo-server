// import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common'
// import { IUser } from '@/users/user/dto'

// export const CurrentUser = createParamDecorator((_data: string, context: ExecutionContext) => {
//   const user: IUser = context.switchToHttp().getRequest().user

//   if (_.isNil(user)) throw new UnauthorizedException('User not authenticated')
//   return user
// })
