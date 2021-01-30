import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { JwtService } from '@nestjs/jwt';

import { ResponseSigninDto } from './dto/response-signin.dto';
import { ReadUserDto } from '../user/dto/read-user.dto';
import { comparePassword } from './utils/bcrypt';
import { SigninDto } from './dto/signin.dto';
import { signupDto } from './dto/signup.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userServices: UserService,
    private jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const userdb = await this.userServices.getUserByEmail(email);
    if (!userdb) throw new NotFoundException('Credenciales incorrectos.');

    const isMatchPassword = await comparePassword(password, userdb.password);
    if (!isMatchPassword)
      throw new NotFoundException('Credenciales incorrectos.');

    const payload = {
      uid: userdb.id,
      username: userdb.username,
      roles: userdb.type_user.name,
    };
    const token = await this.jwtService.signAsync(payload);
    const user = plainToClass(ReadUserDto, userdb);

    return plainToClass(ResponseSigninDto, { token, user });
  }

  async signup(signupDto: signupDto) {
    const userdb = await this.userServices.getUserByEmail(signupDto.email);
    if (userdb) throw new BadRequestException('El email ya esta registrado.');

    const createdUser = await this.userServices.signup(signupDto);
    return createdUser;
  }
}
