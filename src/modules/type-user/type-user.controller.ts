import { Body, Controller, Post } from '@nestjs/common';
import { ValidationDto } from 'src/pipes/validationDto.pipe';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { TypeUserService } from './type-user.service';

@Controller('type-user')
export class TypeUserController {
  constructor(private typeUserServices: TypeUserService) {}

  @Post('create')
  async create(
    @Body(new ValidationDto()) createTypeUserDto: CreateTypeUserDto,
  ) {
    const response = await this.typeUserServices.create(createTypeUserDto);
    return response;
  }
}
