import { Exclude, Expose } from 'class-transformer';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

@Exclude()
export class ReadUserDto {
  @Expose()
  @IsString()
  username: string;

  @Expose()
  @IsString()
  aboutMe: string;

  @Expose()
  @IsString()
  photo: string;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsBoolean()
  sexo: boolean;

  @Expose()
  @IsString()
  birthdate: string;
}
