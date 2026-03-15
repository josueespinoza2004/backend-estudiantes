import { Module } from '@nestjs/common';
import { EstudiantesController } from './controllers/estudiantes.controller';
import { EstudiantesService } from './services/estudiantes.service';

@Module({
  imports: [EstudiantesModule],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  exports: [],
})
export class EstudiantesModule {}
