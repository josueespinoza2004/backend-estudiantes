import { Column, CreateDateColumn, Entity } from 'typeorm';

@Entity('estudiantes.estudiante')
export class Estudiante {
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 60 })
  nombres: string;

  @Column({ type: 'varchar', nullable: true, length: 30 })
  paterno: string;

  @Column({ type: 'varchar', nullable: true, length: 30 })
  materno: string;

  @Column({ type: 'int', nullable: false })
  sexo_id: number;

  @Column({ type: 'varchar', nullable: true, length: 200 })
  direccion: string;

  @Column({ type: 'int4', nullable: false })
  etnia_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
