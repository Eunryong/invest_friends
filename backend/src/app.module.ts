import { Module } from '@nestjs/common';
import { StockModule } from './stock/Stock.module';

@Module({
  imports: [StockModule],
})
export class AppModule {}
