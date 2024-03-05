import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {project } from './project.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 6747,
      username: 'User',
      password: '',
      database: 'jayDB',
      entities: [project],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([project]),
  ],
 
})
export class AppModule {}
