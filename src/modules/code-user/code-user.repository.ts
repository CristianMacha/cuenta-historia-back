import { EntityRepository, Repository } from 'typeorm';

import { CodeUser } from './code-user.entity';

@EntityRepository(CodeUser)
export class CodeUserRepository extends Repository<CodeUser> {}
