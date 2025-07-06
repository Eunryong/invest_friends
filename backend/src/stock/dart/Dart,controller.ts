import { Controller, Get, Query } from '@nestjs/common';
import { DartService } from './Dart.service';
import { SinglIndxRequest } from './dto/SinglIndxRequest.dto';
import { SinglIndxResponse } from './dto/SinglIndxResponse.dto';
import { CorpCodeDto } from './dto/CorpCode.dto';

@Controller('dart')
export class DartController {
  constructor(private readonly dartService: DartService) {}

  @Get('corp-code')
  async getCorpCode(@Query() query: SinglIndxRequest): Promise<CorpCodeDto[]> {
    return this.dartService.getCorpCode();
  }

  @Get('single-index')
  async getSingleIndex(
    @Query() query: SinglIndxRequest,
  ): Promise<SinglIndxResponse> {
    return this.dartService.getSingleIndex(query);
  }
}
