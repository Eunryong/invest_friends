import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DartController } from './dart.controller';
import { DartService } from './dart.service';

@Module({
  imports: [HttpModule],
  controllers: [DartController],
  providers: [DartService],
  exports: [DartService],
})
export class DartModule {}
