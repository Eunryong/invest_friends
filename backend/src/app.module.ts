import { Module } from '@nestjs/common';
import { StockModule } from './stock/stock.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    StockModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
