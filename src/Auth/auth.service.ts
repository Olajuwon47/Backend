import { Injectable, Inject } from '@nestjs/common';
import { MY_TOKEN } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(@Inject (MY_TOKEN) private readonly myValue: string) {}

  getMYValue(): string{
    return this.myValue
    
  }
}