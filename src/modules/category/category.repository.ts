import { EntityRepository, Repository } from 'typeorm';

import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async register(createCategoryDto: CreateCategoryDto) {
    const newCategory = this.create(createCategoryDto);
    newCategory.active = true;
    const createdCategory = await this.save(newCategory);
    return createdCategory;
  }

  async findByName(name: string) {
    const categorydb = await this.findOne({ where: { name } });
    return categorydb;
  }

  async findAll(active: boolean = true) {
    const categoriesdb = await this.find({ where: { active } });
    return categoriesdb;
  }
}
