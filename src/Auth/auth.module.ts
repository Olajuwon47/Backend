import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MY_TOKEN  } from './auth.constants';


@Module({
  providers: [
    {
      provide: MY_TOKEN ,
      useValue:'This is my token value',
    },
  ],
  exports:[AuthService],
})
export class AuthModule {}