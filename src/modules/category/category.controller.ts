import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { ValidationDto } from '../../pipes/validationDto.pipe';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { CategoryService } from './category.service';
import { Role } from '../../configs/role.enum';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('category')
export class CategoryController {
  constructor(private categoryServices: CategoryService) {}

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('create')
  async create(
    @Body(new ValidationDto()) createCategoryDto: CreateCategoryDto,
  ) {
    const response = await this.categoryServices.create(createCategoryDto);
    return response;
  }

  @Get('list')
  async getAll() {
    const response = await this.categoryServices.getAll();
    return response;
  }
}
