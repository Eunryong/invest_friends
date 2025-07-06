import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DartModule } from './dart/dart.module';

@Module({
  imports: [
    DartModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class StockModule {}
