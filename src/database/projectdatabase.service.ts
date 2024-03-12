import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { projectdatabase } from './projectdatabase.entity';

@Injectable()
export class projectdatabaseService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
        type: 'postgres',
        host: 'localhost',
        port: 6746,
        username: 'postgres',
        password: 'admin',
        database: 'jayDB',
        entities: [projectdatabase + './projectdatabase.entity.ts'],
        synchronize:false ,
      }
    };
  }
