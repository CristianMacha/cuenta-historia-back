import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class signupDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  sexo: boolean;

  @IsString()
  birthdate: Date;
}
