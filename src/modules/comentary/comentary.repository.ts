import { EntityRepository, Repository } from 'typeorm';

import { Comentary } from './comentary.entity';

@EntityRepository(Comentary)
export class ComentaryRepository extends Repository<Comentary> {}
