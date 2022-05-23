import { ApiProperty } from '@nestjs/swagger';

export class SAPBody {
  @ApiProperty()
  name: string;

  @ApiProperty()
  value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}
