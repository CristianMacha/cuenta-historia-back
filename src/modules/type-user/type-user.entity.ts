import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class TypeUser {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => User, (user) => user.type_user)
  users: User[];

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;
}
