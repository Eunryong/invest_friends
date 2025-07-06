import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DartController } from './Dart,controller';
import { DartService } from './Dart.service';

@Module({
  imports: [HttpModule],
  controllers: [DartController],
  providers: [DartService],
  exports: [DartService],
})
export class DartModule {}
