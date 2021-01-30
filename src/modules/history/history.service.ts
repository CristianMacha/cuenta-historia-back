import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from '../category/category.entity';
import { UserRepository } from '../user/user.repository';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryRepository } from './history.repository';

@Injectable()
export class HistoryService {
  constructor(
    private historyRepository: HistoryRepository,
    // private userRepository: UserRepository,
  ) {}

  async create(createHistoryDto: CreateHistoryDto, user: any) {
    const historydb = await this.historyRepository.findByTitle(
      createHistoryDto.title,
    );
    if (historydb) throw new BadRequestException('El titulo ya existe.');

    const category = new Category();
    category.id = createHistoryDto.categoryId;

    // const userdb = await this.userRepository.findOne(user.uid);

    // const createdHIstory = await this.historyRepository.register(
    //   createHistoryDto,
    //   userdb,
    //   category,
    // );
    // return createdHIstory;
  }
}
