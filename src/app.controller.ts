import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MaterialDetail } from './model/MaterialDetail';
import { PRRequest } from './model/PRRequest';
import * as materialType from './model/material.type';
import { ApiResponse } from '@nestjs/swagger';
import { SAPBody } from './model/SAPBody';
@Controller()
export class AppController {
  prList: Array<PRRequest> = new Array<PRRequest>();

  materialList: Array<MaterialDetail> = new Array<MaterialDetail>();

  materialGroupList: Array<SAPBody> = new Array<SAPBody>();

  addMaterialList() {
    this.materialList.push(
      new MaterialDetail(
        '314881',
        'Stainless Steel 361L',
        'เหล็กกล้าใช้ผลิตฐานปั้ม',
        materialType.BODY_STEEL,
      ),
    );
    this.materialList.push(
      new MaterialDetail(
        '314882',
        'น็อตแปดแฉก 77KLP',
        'เหล็กกล้าใช้ผลิตฐานปั้ม',
        materialType.BODY_STEEL,
      ),
    );
    this.materialList.push(
      new MaterialDetail(
        '54422',
        'ไฮโดรเจนเหลวพ็อกซีเฟอร์',
        'วาล์วใช้กับใส่แก๊ซ',
        materialType.SPEED_CUT,
      ),
    );
  }

  addMaterialGroup() {
    this.materialGroupList.push(new SAPBody('1101', 'เหล็ก Body'));
    this.materialGroupList.push(new SAPBody('1102', 'เหล็กหูขา'));
    this.materialGroupList.push(new SAPBody('1103', 'เหล็กเพลา'));
    this.materialGroupList.push(new SAPBody('1104', 'เหล็กแป๊ป'));
    this.materialGroupList.push(new SAPBody('1201', 'หูถัง'));
    this.materialGroupList.push(new SAPBody('1202', 'ขาถัง'));
  }

  constructor(private readonly appService: AppService) {
    this.addMaterialList();
    this.addMaterialGroup();
  }

  @Get('/material-codes')
  getMaterialCode(): Array<MaterialDetail> {
    return this.materialList;
  }

  @Get('/material-groups')
  getMaterialGroup(): Array<SAPBody> {
    return this.materialGroupList;
  }

  @Get('/purchase-requsitions')
  getHello(): any {
    return this.prList;
  }

  @Post('/purchase-requsition')
  createPurchaseRequestion(@Body() prRequester: PRRequest) {
    console.log(prRequester);
    this.prList.push(prRequester);
  }
}
