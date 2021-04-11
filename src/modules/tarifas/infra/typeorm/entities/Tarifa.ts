import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ITarifa } from '@modules/tarifas/domain/models/ITarifa';

@Entity('tarifas')
class Tarifa implements ITarifa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  origem: string;

  @Column()
  destino: string;

  @Column('decimal')
  custo: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tarifa;
