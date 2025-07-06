import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DartModule } from './dart/DartModule';

@Module({
  imports: [
    DartModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class StockModule {}
