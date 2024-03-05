import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { project } from './project.entity';

@Injectable()
export class projectService {
  constructor(
    @InjectRepository(project)
    private readonly  projectRepository: Repository<project>,
  ) {}
  
  findAll(): Promise<project[]> {
    return this.projectRepository.find();
  }
}