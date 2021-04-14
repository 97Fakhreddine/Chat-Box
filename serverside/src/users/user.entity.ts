import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  Unique,
} from 'typeorm';
@Entity('users')
@Unique(['username'])
@Unique(['email'])
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, default: null })
  username: string; //required
  @Column({ length: 100 })
  email: string; //required
  @Column({ length: 150 })
  password: string; //required
  @Column({ length: 150 })
  emailToken: string;
}
export interface User {
  username: string;
  email: string;
  password: string;
}

export interface ForgetPassword {
  email: string;
  newPassword: string;
  emailToken: string;
}
