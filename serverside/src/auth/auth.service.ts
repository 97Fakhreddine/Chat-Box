import { Injectable, NotFoundException, Headers } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { jwtConstants } from './constants';

export class VerifiedUser {
  username: string;
  email: string;
  token: string;
}

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}
  async googleLogin(req, res): Promise<any> {
    if (!req.user) {
      return 'No user from google';
    } else {
      const user = await this.userRepository.findOne({ email: req.user.email });
      if (user && user.password == null) {
        const token = await this.jwtService.sign(
          {
            username: user.email,
          },
          jwtConstants,
        );
        return {
          username: user.username,
          email: user.email,
          token: token,
        };
      }
      const data = await this.userRepository.save({
        username: req.user.firstname,
        email: req.user.email,
        password: null,
      });

      const token = await this.jwtService.sign(
        {
          username: user.email,
        },
        jwtConstants,
      );

      return {
        username: data.username,
        email: data.email,
        token: token,
      };
    }
  }

  async verifyUser(hearder): Promise<VerifiedUser | Error> {
    try {
      const token = await hearder.authorization.split(' ')[1];
      const verify = await this.jwtService.verify(token, jwtConstants);
      const user = await this.userRepository.findOne({
        email: verify.username,
      });
      if (user) {
        const refreshToken = await this.jwtService.sign(
          {
            username: user.email,
          },
          jwtConstants,
        );
        return {
          username: user.username,
          email: user.email,
          token: refreshToken,
        };
      } else {
        return new NotFoundException('NOT FOUND');
      }
    } catch (err) {
      return new NotFoundException('NOT FOUND');
    }
  }
}
