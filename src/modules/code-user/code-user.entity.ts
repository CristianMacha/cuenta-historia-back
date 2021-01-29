import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '../user/user.entity';

@Entity()
export class CodeUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.codes, { nullable: false })
  user: User;

  @Column({ nullable: false })
  reason: string;

  @Column({ nullable: false })
  code: string;

  @Column({ nullable: false })
  used: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;
}
