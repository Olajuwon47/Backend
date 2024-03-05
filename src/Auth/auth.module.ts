import { Module } from '@nestjs/common';
import { MY_TOKEN } from './auth.constants';


@Module({
  providers: [
    {
      provide: MY_TOKEN,
      useValue:'This is my token value',
    },
  ],
})
export class AuthModule {}