import { Body, Controller, Post } from '@nestjs/common';

import { ValidationDto } from '../../pipes/validationDto.pipe';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { signupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authServices: AuthService) {}

  @Post('signin')
  async signin(@Body(new ValidationDto()) signinDto: SigninDto) {
    const response = await this.authServices.signin(signinDto);
    return response;
  }

  @Post('signup')
  async signup(@Body(new ValidationDto()) signupDto: signupDto) {
    const response = await this.authServices.signup(signupDto);
    return response;
  }
}
