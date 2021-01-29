import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserRepository } from '../user/user.repository';
import { TypeUserRepository } from '../type-user/type-user.repository';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'HERE-SEED',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    TypeOrmModule.forFeature([UserRepository, TypeUserRepository])
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
