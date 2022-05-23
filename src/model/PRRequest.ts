import { ApiProperty } from '@nestjs/swagger';

export class PRRequest {
  @ApiProperty()
  materialName: string;
  @ApiProperty()
  expectDelivery: Date;
}
