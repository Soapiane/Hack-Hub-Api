import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
  @ApiProperty()
  data: T;

  @ApiProperty()
  timestamp: string;

  @ApiProperty()
  path: string;
}