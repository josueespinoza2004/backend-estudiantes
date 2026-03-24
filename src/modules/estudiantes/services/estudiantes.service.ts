import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from '../entities/estudiante.entity';
import { Repository } from 'typeorm';
import { CreateEstudianteDto } from '../dto/estudiante.dto';
import { Etnia } from 'src/modules/etnias/entities/etnia.entity';
import { Sexo } from 'src/modules/sexos/entities/sexo.entity';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepo: Repository<Estudiante>,
    @InjectRepository(Etnia)
    private readonly etniaRepo: Repository<Etnia>,
    @InjectRepository(Sexo)
    private readonly sexoRepo: Repository<Sexo>,
  ) {}

  getAll() {
    return `Endpoint para getAll`;
  }

  getOne(id: number) {
    return `Esto retorna el id ${id}`;
  }

  async create(estudianteDto: CreateEstudianteDto) {
    try {
      const estudiante = this.estudianteRepo.create(estudianteDto);

      return await this.estudianteRepo.save(estudiante);
    } catch (error) {
      console.log(error);
    }
  }
}
