import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class  projectdatabase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  surname: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  username: string;

  @Column()
  date : number;

  @Column()
  Email: string;

  @Column()
  Password: string;
}