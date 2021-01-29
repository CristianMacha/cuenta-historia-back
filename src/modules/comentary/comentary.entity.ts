import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { History } from '../history/history.entity';
import { User } from '../user/user.entity';

@Entity()
export class Comentary {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.comentaries, { nullable: false })
  user: User;

  @ManyToOne(() => History, (history) => history.comentaries, {
    nullable: false,
  })
  history: History;

  @Column({ nullable: false })
  comentary: string;

  @Column({ nullable: false })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  creatAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;
}
