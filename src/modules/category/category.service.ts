import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRespository: CategoryRepository) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const { name, description } = createCategoryDto;
    const categorydb = await this.categoryRespository.findByName(name);
    if (categorydb)
      throw new BadRequestException('La categoria ya esta registrada');

    const createdCategory = await this.categoryRespository.register(
      createCategoryDto,
    );
    return createdCategory;
  }

  async getAll() {
    const categories = await this.categoryRespository.findAll();
    return categories;
  }
}
