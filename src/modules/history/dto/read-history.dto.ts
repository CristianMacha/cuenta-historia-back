import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { DetailHistory } from 'src/modules/detail-history/detail-history.entity';
import { ReadUserDto } from 'src/modules/user/dto/read-user.dto';

@Exclude()
export class ReadHistoryDto {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsString()
  title: string;

  @Expose()
  @IsString()
  content: string;

  @Expose()
  @IsString()
  img: string;

  @Expose()
  @IsString()
  sinopsis: string;

  @Expose()
  @IsObject()
  @Type(() => ReadUserDto)
  user: ReadUserDto;

  @Expose()
  @IsObject()
  @Type(() => DetailHistory)
  detail: DetailHistory;
}
