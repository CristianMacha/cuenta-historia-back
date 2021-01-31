import { IsBoolean, IsNumber } from 'class-validator';

export class CreateLikeDto {
  @IsNumber()
  historyId: number;

  @IsBoolean()
  like: boolean;
}
