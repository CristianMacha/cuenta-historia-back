import { EntityRepository, Repository } from 'typeorm';

import { DetailHistory } from './detail-history.entity';

@EntityRepository(DetailHistory)
export class DetailHistoryRepository extends Repository<DetailHistory> {}
