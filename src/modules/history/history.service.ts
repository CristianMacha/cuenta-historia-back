import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UserService } from '../user/user.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryRepository } from './history.repository';
import cloudinary from '../../configs/cloudinary';
import { IPayload } from '../auth/interfaces/payload.interface';
import { getConnection } from 'typeorm';
import { DetailHistory } from '../detail-history/detail-history.entity';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { plainToClass } from 'class-transformer';
import { ReadHistoryDto } from './dto/read-history.dto';

@Injectable()
export class HistoryService {
  constructor(
    private historyRepository: HistoryRepository,
    private userService: UserService,
  ) {}

  async getHistoryById(historyId: number) {
    const history = await this.historyRepository.findById(historyId);
    return history;
  }

  async getHistoriesByCategory(categoryId: number) {
    const histories = await this.historyRepository.getHistoriesByCategory(
      categoryId,
    );
    return histories;
  }

  async create(createHistoryDto: CreateHistoryDto, user: any) {
    const historydb = await this.historyRepository.findByTitle(
      createHistoryDto.title,
    );
    if (historydb) throw new BadRequestException('El titulo ya existe.');

    const result = await getConnection().transaction(
      async (transactionalEntityManager) => {
        const newDetailHistory = new DetailHistory();
        const createdDetailHistory = await transactionalEntityManager.save(
          newDetailHistory,
        );

        const userdb = await this.userService.getUserById(user.uid);
        const resultUploadPhoto = await cloudinary.v2.uploader.upload(
          createHistoryDto.img,
        );
        const urlPhoto = resultUploadPhoto.secure_url;

        const newHistory = this.historyRepository.create(createHistoryDto);
        newHistory.user = userdb;
        newHistory.img = urlPhoto;
        newHistory.detail = createdDetailHistory;
        const createdHistory = await transactionalEntityManager.save(
          newHistory,
        );

        return createdHistory;
      },
    );

    return result;
  }

  async update(updateHistoryDto: UpdateHistoryDto, historyId: number) {
    let historydb = await this.historyRepository.findById(historyId);
    if (!historydb) throw new NotFoundException('No existe la historia');

    historydb.title = updateHistoryDto.title;
    historydb.content = updateHistoryDto.content;
    historydb.sinopsis = updateHistoryDto.sinopsis;
    const updatedHistory = await this.historyRepository.updateH(historydb);

    return plainToClass(ReadHistoryDto, updateHistoryDto);
  }

  async delete(historyId: number) {
    const deletedHistory = await this.historyRepository.deleteH(historyId);
    return deletedHistory;
  }

  async getMyHistories(user: IPayload) {
    const myHistories = await this.historyRepository.findByUserId(user.uid);
    return myHistories;
  }

  async getAllHistories() {
    const histories = await this.historyRepository.getHIstoriesWithUser(true);
    return histories;
  }
}
