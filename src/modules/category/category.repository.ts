import { EntityRepository, Repository } from 'typeorm';

import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async register(createCategoryDto: CreateCategoryDto) {
    const newCategory = this.create(createCategoryDto);
    const createdCategory = await this.save(newCategory);

    return createdCategory;
  }
}
