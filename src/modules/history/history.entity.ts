import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { DetailHistory } from '../detail-history/detail-history.entity';
import { Comentary } from '../comentary/comentary.entity';
import { Category } from '../category/category.entity';
import { Like } from '../like/like.entity';
import { User } from '../user/user.entity';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => DetailHistory)
  @JoinColumn()
  detail: DetailHistory;

  @OneToMany(() => Like, (likes) => likes.history)
  likes: Like[];

  @OneToMany(() => Comentary, (c) => c.comentary)
  comentaries: Comentary[];

  @ManyToOne(() => User, (user) => user.histories, { nullable: false })
  user: User;

  @ManyToOne(() => Category, (category) => category.histories, {
    nullable: false,
  })
  category: Category;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true })
  img: string;

  @Column({ nullable: true })
  sinopsis: string;

  @Column({ nullable: false, default: true })
  status: boolean;

  @Column({ nullable: false })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;
}
