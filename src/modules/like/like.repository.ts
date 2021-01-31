import { EntityRepository, Repository } from 'typeorm';
import { History } from '../history/history.entity';
import { User } from '../user/user.entity';

import { Like } from './like.entity';

@EntityRepository(Like)
export class LikeRepository extends Repository<Like> {
  async register(history: History, user: User, like: boolean = true) {
    const newLike = this.create({ history, user, like });
    const createdLike = await this.save(newLike);
    return createdLike;
  }

  async findByUserId(userId: number, history: History) {
    const likedb = await this.findOne({
      where: { history, user: { id: userId } },
    });
    return likedb;
  }
}
