import { Column, CreateDateColumn, Entity } from 'typeorm';

@Entity('sexos.sexo')
export class Sexo {
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 30 })
  sexo: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
