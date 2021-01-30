import { EntityRepository, Repository } from 'typeorm';
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
    urlImg: string,
  ) {
    const newHistory = this.create(createHistoryDto);
    newHistory.user = user;
    newHistory.active = true;
    newHistory.img = urlImg;
    const createdHistory = await this.save(newHistory);
    return createdHistory;
  }

  async findByUserId(userId: number, active: boolean = true) {
    const histories = await this.find({
      where: { user: { id: userId }, active },
    });

    return histories;
  }
}
