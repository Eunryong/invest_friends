import { Module } from '@nestjs/common';
import { DartModule } from './dart/dart.module';

@Module({
  imports: [DartModule],
})
export class StockModule {}
