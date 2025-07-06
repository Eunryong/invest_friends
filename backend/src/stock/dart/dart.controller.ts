import { Controller, Get, Query } from '@nestjs/common';
import { DartService } from './dart.service';
import { SinglIndxRequest, SinglIndxResponse } from './dto/singl-indx.dto';
import { CorpCodeDto } from './dto/corp-code.dto';

@Controller('dart')
export class DartController {
  constructor(private readonly dartService: DartService) {}

  @Get('corp-code')
  async getCorpCode(): Promise<CorpCodeDto[]> {
    return this.dartService.getCorpCode();
  }

  @Get('single-index')
  async getSingleIndex(
    @Query() query: SinglIndxRequest,
  ): Promise<SinglIndxResponse> {
    return this.dartService.getSingleIndex(query);
  }
}
