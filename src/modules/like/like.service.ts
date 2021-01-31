import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { IPayload } from '../auth/interfaces/payload.interface';
import { HistoryService } from '../history/history.service';
import { UserService } from '../user/user.service';
import { CreateLikeDto } from './dto/create-user.dto';
import { LikeRepository } from './like.repository';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeRepository)
    private likeRepository: LikeRepository,
    private historyServices: HistoryService,
    private userServices: UserService,
  ) {}

  async create(createLikeDto: CreateLikeDto, user: IPayload) {
    const historydb = await this.historyServices.getHistoryById(
      createLikeDto.historyId,
    );
    if (!historydb) throw new NotFoundException('La historia no existe.');

    const likedb = await this.likeRepository.findByUserId(user.uid, historydb);
    if (likedb) throw new BadRequestException('Ya reacciono a esta historia');
    const userDb = await this.userServices.getUserById(user.uid);

    const createdLike = await this.likeRepository.register(
      historydb,
      userDb,
      createLikeDto.like,
    );
    return createdLike;
  }
}
