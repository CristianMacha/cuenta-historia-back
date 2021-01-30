import { EntityRepository, Repository } from 'typeorm';
import { Category } from '../category/category.entity';
import { User } from '../user/user.entity';
import { CreateHistoryDto } from './dto/create-history.dto';

import { History } from './history.entity';

@EntityRepository(History)
export class HistoryRepository extends Repository<History> {
  async findByTitle(title: string, active: boolean = true) {
    const historydb = await this.findOne({ where: { title, active } });
    return historydb;
  }

  async register(
    createHistoryDto: CreateHistoryDto,
    user: User,
    category: Category,
  ) {
    const newHistory = this.create(createHistoryDto);
    newHistory.user = user;
    newHistory.active = true;
    newHistory.category = category;
    const createdHistory = await this.save(newHistory);
    return createdHistory;
  }
}
