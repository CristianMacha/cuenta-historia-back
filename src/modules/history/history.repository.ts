import { EntityRepository, Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

import { User } from '../user/user.entity';
import { CreateHistoryDto } from './dto/create-history.dto';
import { ReadHistoryDto } from './dto/read-history.dto';
import { History } from './history.entity';

@EntityRepository(History)
export class HistoryRepository extends Repository<History> {
  async findById(historyId: number, active: boolean = true) {
    const historydb = await this.findOne(historyId, {
      where: { active },
      relations: ['detail'],
    });
    return historydb;
  }

  async updateH(history: History) {
    const historydb = this.merge(history);
    const updatedHistory = await this.save(historydb);
    return updatedHistory;
  }

  async deleteH(historyId: number) {
    let historydb = await this.findOne(historyId);
    historydb.active = false;
    const result = await this.save(historydb);
    return result;
  }

  async getHistoriesByCategory(categoryId: number, active: boolean = true) {
    const historiesdb = await this.find({
      where: { category: { id: categoryId }, active },
      relations: ['user'],
    });
    return historiesdb.map((history) => plainToClass(ReadHistoryDto, history));
  }

  async getHIstoriesWithUser(active: boolean = true) {
    const histories = await this.find({
      where: { active },
      relations: ['user'],
    });
    return histories.map((history) => plainToClass(ReadHistoryDto, history));
  }

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
