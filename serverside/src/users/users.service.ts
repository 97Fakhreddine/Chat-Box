import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { UserSignUp } from './users.controller';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from '../auth/constants';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}
  async signup(user: UserSignUp): Promise<object | Error> {
    const username = await this.userRepository.findOne({
      username: user.username,
    });
    const email = await this.userRepository.findOne({ email: user.email });
    if (username || email) {
      return new NotFoundException('USERNAME OR EMAIL');
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    this.userRepository.save(user);

    const token = this.jwtService.sign({
      username: user.email,
      jwtConstants,
    });
    return { user: user, token: token };
  }
}
