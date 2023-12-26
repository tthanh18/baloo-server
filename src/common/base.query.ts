import { IsNumber, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { SortEnum } from './enum'

export class BaseQuery {
  @ApiProperty({ required: false, default: 1, type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page? = 1

  @ApiProperty({ required: false, default: 20, type: Number })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  size? = 20

  @ApiProperty({ required: false, enum: SortEnum, type: Number })
  @IsOptional()
  @Type(() => Number)
  sort: SortEnum
}
