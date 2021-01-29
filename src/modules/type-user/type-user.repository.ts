import { EntityRepository, Repository } from 'typeorm';

import { TypeUser } from './type-user.entity';

@EntityRepository(TypeUser)
export class TypeUserRepository extends Repository<TypeUser> {}
