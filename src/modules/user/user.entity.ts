import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CodeUser } from '../code-user/code-user.entity';
import { Comentary } from '../comentary/comentary.entity';
import { History } from '../history/history.entity';
import { Like } from '../like/like.entity';
import { TypeUser } from '../type-user/type-user.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Like, (rLikes) => rLikes.user)
  likes: Like[];

  @OneToMany(() => Comentary, (c) => c.comentary)
  comentaries: Comentary[];

  @ManyToOne(() => TypeUser, (tUser) => tUser.users, { nullable: false })
  type_user: TypeUser;

  @OneToMany(() => History, (history) => history.user)
  histories: History[];

  @OneToMany(() => CodeUser, (codeUser) => codeUser.user)
  codes: CodeUser[];

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: true })
  aboutMe: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  sexo: boolean;

  @Column({ type: 'timestamp', nullable: true })
  birthdate: Date;

  @Column({ nullable: false, default: false })
  confirmed: boolean;

  @Column({ nullable: false, default: true })
  active: boolean;

  @Column({ nullable: false, default: false })
  google: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;
}
