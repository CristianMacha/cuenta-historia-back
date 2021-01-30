import { IsBoolean, IsEmail, IsObject, IsString } from 'class-validator';
import { TypeUser } from 'src/modules/type-user/type-user.entity';

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

  @IsObject()
  type_user: TypeUser;
}
