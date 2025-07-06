import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DartController } from './DartController';
import { DartService } from './DartService';

@Module({
  imports: [HttpModule],
  controllers: [DartController],
  providers: [DartService],
  exports: [DartService],
})
export class DartModule {}
