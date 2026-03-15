import { Column, CreateDateColumn, Entity } from 'typeorm';

@Entity('etnias.etnia')
export class Etnia {
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 30 })
  etnia: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
