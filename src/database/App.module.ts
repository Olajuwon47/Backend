import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {projectdatabaseModule } from './projectdatabase.module';
import { projectdatabaseService } from './projectdatabase.service';
import { DatabaseModule } from './database.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: projectdatabaseService,
    }),
    projectdatabaseModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService,projectdatabaseService, DatabaseService],
})
export class AppModule {}