import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {project } from './project.entity';
import { projectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // ... (previous TypeORM config)
      entities: [project],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([project]),
  ],
 providers: [projectService],
  controllers: [ProjectController],
 /* providers: [PollService],
  controllers: [PollController],*/
})
export class AppModule {}
