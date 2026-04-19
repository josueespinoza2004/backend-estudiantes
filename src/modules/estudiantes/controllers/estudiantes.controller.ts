import {
  Body,
  Controller,
  // Get,
  ParseIntPipe,
  // Post,
} from '@nestjs/common';
import { EstudiantesService } from '../services/estudiantes.service';
import {
  CreateEstudianteDto,
  UpdateEstudianteDto,
} from '../dto/estudiante.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudianteService: EstudiantesService) {}

  @MessagePattern({ cmd: 'get_all_students' })
  async getAll() {
    const rows = await this.estudianteService.getAll();

    const datos = {
      data: rows,
      count: rows.length,
    };
    return datos;
  }

  @MessagePattern({ cmd: 'get_one_student' })
  getOne(@Payload(ParseIntPipe) id: number) {
    return this.estudianteService.getOne(id);
  }

  @MessagePattern({ cmd: 'create_student' })
  async create(@Payload() estudianteDto: CreateEstudianteDto) {
    const estudiante = await this.estudianteService.create(estudianteDto);

    const datos = {
      data: estudiante,
      message: 'Registro agregado con exito',
    };

    return datos;
  }

  @MessagePattern({ cmd: 'update_student' })
  async update(
    @Payload()
    { id, estudianteDto }: { id: number; estudianteDto: UpdateEstudianteDto },
  ) {
    const estudiante = await this.estudianteService.update(id, estudianteDto);

    const datos = {
      data: estudiante,
      message: 'Registro actualizado con exito',
    };

    return datos;
  }

  @MessagePattern({ cmd: 'remove_student' })
  remove(@Payload(ParseIntPipe) id: number, payload: CreateEstudianteDto) {
    return this.estudianteService.delete(id, payload);
  }
}
