import { Module } from '@nestjs/common';
import { StockModule } from './stock/StockModule';

@Module({
  imports: [StockModule],
})
export class AppModule {}
