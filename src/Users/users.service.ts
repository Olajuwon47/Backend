import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | undefined> {
    const options:FindOneOptions<User> ={ where:{id}};
    return this.userRepository.findOne(options);
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<User | undefined> {
    await this.userRepository.update(id, user);
    const options:FindOneOptions<User> ={ where:{id}};
    return this.userRepository.findOne(options);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}