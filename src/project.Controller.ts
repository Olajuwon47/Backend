import { Controller, Get, Post, Body } from '@nestjs/common';
import { projectService } from './project.service';

@Controller('polls')
export class ProjectController {
  constructor(private readonly pollService:projectService) {}

  @Post()
  createPoll(@Body() { question, options }: { question: string; options: string[] }) {
    return this.pollService.createPoll(question, options);
  }

  @Get()
  getAllPolls() {
    return this.pollService.getAllPolls();
  }
}