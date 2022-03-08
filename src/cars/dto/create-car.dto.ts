import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  color: string;

  @ApiProperty()
  builder: string;
}
