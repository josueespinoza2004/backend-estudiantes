import { Module } from '@nestjs/common';
import { SexosController } from './controllers/sexos.controller';
import { SexosService } from './services/sexos.service';

@Module({
  imports: [SexosModule],
  controllers: [SexosController],
  providers: [SexosService],
  exports: [],
})
export class SexosModule {}
