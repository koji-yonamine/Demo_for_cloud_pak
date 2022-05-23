import { ApiProperty } from '@nestjs/swagger';

export class MaterialDetail {
  @ApiProperty()
  materialCode: string;

  @ApiProperty()
  materialName: string;

  @ApiProperty()
  materialGroup: string;

  @ApiProperty()
  materialDescription: string;

  constructor(
    materialCode: string,
    materialName: string,
    materialDescription: string,
    materialGroup: string,
  ) {
    this.materialCode = materialCode;
    this.materialName = materialName;
    this.materialDescription = materialDescription;
    this.materialGroup = materialGroup;
  }
}
