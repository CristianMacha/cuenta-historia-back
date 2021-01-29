import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private categoryRespository: CategoryRepository) {}
  async create(createCategoryDto: CreateCategoryDto) {
      const createdCategory = await this.categoryRespository.register(createCategoryDto);
      
  }
}
