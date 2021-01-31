import { IsString } from 'class-validator';

export class UpdateHistoryDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  sinopsis: string;
}
