import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
@Unique(['email'])
@Unique(['cpf'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ nullable: false })
  name: string;

  @ApiProperty()
  @Column({ nullable: false })
  lastName: string;

  @ApiProperty()
  @Column({ nullable: false })
  email: string;

  @ApiProperty()
  @Exclude()
  @Column({ nullable: false })
  password: string;

  @ApiProperty()
  @Column()
  cpf: string;

  @ApiProperty()
  @Column()
  birthDate: Date;

  @ApiProperty()
  @Column()
  phoneNumber: string;

  @ApiProperty()
  @Column()
  nickName: string;

  @ApiProperty()
  @Column()
  gender: string;

  @Column({ default: false })
  active: boolean;

  @Column({ default: false })
  approved: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;
}
