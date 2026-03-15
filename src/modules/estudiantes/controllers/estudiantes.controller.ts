import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EstudiantesService } from '../services/estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private estudiantesService: EstudiantesService) {}

  @Get()
  getAll() {
    return this.estudiantesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.getOne(id);
  }
}
