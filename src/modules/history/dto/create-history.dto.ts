import { IsBase64, IsObject, IsString } from 'class-validator';
import { Category } from 'src/modules/category/category.entity';

export class CreateHistoryDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  sinopsis: string;

  @IsObject()
  category: Category;

  @IsString()
  img: string;
}
