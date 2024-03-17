import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


 imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 6746,
      username: 'postgres',
      password: 'admin',
      database: 'jayDB',
      entities: ["dist/** /*./user.entity"],
      synchronize:false ,
    }),
  ]
export class AppModule {}
