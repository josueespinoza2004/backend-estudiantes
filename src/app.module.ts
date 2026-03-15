import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { SexosModule } from './modules/sexos/sexos.module';
import { EtniasModule } from './modules/etnias/etnias.module';

@Module({
  imports: [EstudiantesModule, SexosModule, EtniasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
