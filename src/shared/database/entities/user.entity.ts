import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity';

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

  @ApiProperty()
  @Column({ nullable: false })
  postalCode: string;

  @ApiProperty()
  @Column({ nullable: false })
  street: string;

  @ApiProperty()
  @Column({ nullable: false })
  number: number;

  @ApiProperty()
  @Column({ nullable: false })
  complement: string;

  @ApiProperty()
  @Column({ nullable: true })
  neighborhood: string;

  @ApiProperty()
  @Column({ nullable: false })
  city: string;

  @ApiProperty()
  @Column({ nullable: false })
  state: string;

  @ApiProperty()
  @Column({ nullable: false })
  role_id: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;

  @ManyToOne(() => Role, (role) => role.users, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'role_id' })
  public role?: Role;  
}
