import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { JwtService } from '@nestjs/jwt';

import { ResponseSigninDto } from './dto/response-signin.dto';
import { UserRepository } from '../user/user.repository';
import { ReadUserDto } from '../user/dto/read-user.dto';
import { comparePassword, encryptPassword } from './utils/bcrypt';
import { SigninDto } from './dto/signin.dto';
import { signupDto } from './dto/signup.dto';
import { TypeUserRepository } from '../type-user/type-user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private typeUserRepository: TypeUserRepository,
    private jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const userdb = await this.userRepository.findOne({
      where: { email, active: true },
    });
    if (userdb) throw new NotFoundException('Credenciales incorrectos.');

    const isMatchPassword = await comparePassword(password, userdb.password);
    if (!isMatchPassword)
      throw new NotFoundException('Credenciales incorrectos.');

    const payload = { uid: userdb.id, username: userdb.username };
    const token = await this.jwtService.signAsync(payload);
    const user = plainToClass(ReadUserDto, userdb);

    return plainToClass(ResponseSigninDto, { token, user });
  }

  async signup(signupDto: signupDto) {
    const { email, password, birthdate, sexo, username } = signupDto;

    const userdb = await this.userRepository.findByEmail(email);
    if (userdb) throw new BadRequestException('El email ya esta registrado.');

    const hashPassword = await encryptPassword(password);
    const typeUser = this.typeUserRepository.create();
    typeUser.id = 2;

    const newUser = this.userRepository.create();
    newUser.username = username;
    newUser.email = email;
    newUser.password = hashPassword;
    newUser.sexo = sexo;
    newUser.birthdate = birthdate;
    newUser.confirmed = false;
    newUser.active = true;
    newUser.google = false;
    newUser.type_user = typeUser;

    const createdUser = await this.userRepository.save(newUser);
    return plainToClass(ReadUserDto, createdUser);
  }
}
