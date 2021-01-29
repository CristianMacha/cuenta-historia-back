import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

import { ReadUserDto } from 'src/modules/user/dto/read-user.dto';

@Exclude()
export class ResponseSigninDto {
  @Expose()
  @IsString()
  token: string;

  @Expose()
  user: ReadUserDto;
}
