import { Users } from 'src/users/user.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { jwtConstants } from 'src/auth/constants';
import { AppService } from 'src/app.service';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '25h' },
    }),
    UsersModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, AppService],
  exports: [UsersService, JwtModule, TypeOrmModule.forFeature([Users])],
})
export class UsersModule {}
