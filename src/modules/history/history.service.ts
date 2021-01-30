import { BadRequestException, Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryRepository } from './history.repository';
import cloudinary from '../../configs/cloudinary';
import { IPayload } from '../auth/interfaces/payload.interface';

@Injectable()
export class HistoryService {
  constructor(
    private historyRepository: HistoryRepository,
    private userService: UserService,
  ) {}

  async create(createHistoryDto: CreateHistoryDto, user: any) {
    const historydb = await this.historyRepository.findByTitle(
      createHistoryDto.title,
    );
    if (historydb) throw new BadRequestException('El titulo ya existe.');

    const userdb = await this.userService.getUserById(user.uid);
    const resultUploadPhoto = await cloudinary.v2.uploader.upload(
      createHistoryDto.img,
    );
    const urlPhoto = resultUploadPhoto.secure_url;
    const createdHIstory = await this.historyRepository.register(
      createHistoryDto,
      userdb,
      urlPhoto,
    );
    return createdHIstory;
  }

  async getMyHistories(user: IPayload) {
    const myHistories = await this.historyRepository.findByUserId(user.uid);
    return myHistories;
  }
}
