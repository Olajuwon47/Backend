import { Controller, Get } from '@nestjs/common';
import { projectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService:projectService) {}

 

  @Get()
  getAllPolls() {
    return this.projectService.findAll();
  }
}