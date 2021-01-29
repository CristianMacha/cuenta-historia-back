import { Exclude, Expose } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';

@Exclude()
export class ReadTypeUserDto {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsBoolean()
  active: boolean;
}
