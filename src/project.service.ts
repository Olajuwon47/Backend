import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { project } from './project.entity';

@Injectable()
export class projectService {
  constructor(
    @InjectRepository(project)
    private readonly pollRepository: Repository<project>,
  ) {}

  async createPoll(question: string, options: string[]): Promise<project> {
    const poll = this.pollRepository.create({ question, options });
    return this.pollRepository.save(poll);
  }

  async getAllPolls(): Promise<project[]> {
    return this.pollRepository.find();
  }
}