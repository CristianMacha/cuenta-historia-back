import { IsString } from 'class-validator';

export class CreateTypeUserDto {
  @IsString()
  name: string;
}
