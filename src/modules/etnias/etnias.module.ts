import { Module } from '@nestjs/common';
import { EtniasController } from './controllers/etnias.controller';
import { EtniasService } from './services/etnias.service';

@Module({
  imports: [EtniasModule],
  controllers: [EtniasController],
  providers: [EtniasService],
  exports: [],
})
export class EtniasModule {}
