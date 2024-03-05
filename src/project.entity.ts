import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column('jsonb', { nullable: true })
  options: string[];
}