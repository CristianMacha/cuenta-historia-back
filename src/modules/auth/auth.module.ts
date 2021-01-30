import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'HERE-SEED',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
