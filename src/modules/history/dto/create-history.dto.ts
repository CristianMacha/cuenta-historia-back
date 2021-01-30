import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateHistoryDto {
  @IsNumber()
  categoryId: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  sinopsis: string;
}
