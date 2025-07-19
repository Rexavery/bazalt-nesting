import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Machine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column('int')
  workAreaX: number;

  @Column('int')
  workAreaY: number;

  @Column('int')
  workAreaZ: number;
}
