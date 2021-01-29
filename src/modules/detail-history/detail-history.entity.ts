import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class DetailHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0, nullable: false })
  countLike: number;

  @Column({ default: 0, nullable: false })
  countDislike: number;

  @Column({ default: 0, nullable: false })
  countView: number;

  @Column({ default: 0, nullable: false })
  countComentary: number;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createAt: Date;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;
}
