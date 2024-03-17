
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    _userId: string,
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.FindOneOption(username);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username, user: user.dob,  firstname: user.firstname, email: user.email, lastname:user.lastname, surname:user.surname, password:user.password };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
