import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { History } from '../history/history.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => History, (history) => history.category)
  histories: History[];

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;
}
