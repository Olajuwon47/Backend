import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {projectdatabaseService } from './projectdatabase.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass:projectdatabaseService,
    }),
  ],
  providers: [projectdatabaseService],
})
export class projectdatabaseModule {}