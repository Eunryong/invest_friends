import { Controller, Get, Query } from '@nestjs/common';
import { DartService } from './dart.service';
import { SinglIndxRequest } from './dto/singl-indx-request.dto';
import { SinglIndxResponse } from './dto/singl-indx-response.dto';
import { CorpCodeDto } from './dto/corp-code.dto';

@Controller('dart')
export class DartController {
  constructor(private readonly dartService: DartService) {}

  @Get('corp-code')
  async getCorpCode(@Query() query: SinglIndxRequest): Promise<CorpCodeDto> {
    return this.dartService.getCorpCode();
  }

  @Get('single-index')
  async getSingleIndex(
    @Query() query: SinglIndxRequest,
  ): Promise<SinglIndxResponse> {
    return this.dartService.getSingleIndex(query);
  }
}
