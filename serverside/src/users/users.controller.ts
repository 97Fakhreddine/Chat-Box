import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiProperty,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';

export class UserSignUp {
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}

export class UserLogin {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
@Controller('users')
export class UsersController {
  constructor(private readonly userRepo: UsersService) {}
  @ApiTags('users')
  @Post('signup')
  @ApiCreatedResponse({
    description: 'User has been successfully created.',
    type: UserSignUp,
  })
  @ApiUnauthorizedResponse({ description: 'Invalide Cridentials' })
  @ApiBody({ type: UserSignUp, required: true })
  signup(@Body() body: UserSignUp): Promise<object | Error> {
    return this.userRepo.signup(body);
  }

  @ApiTags('users')
  @Post('login')
  @ApiCreatedResponse({
    description: 'User has been successfully created.',
    type: UserLogin,
  })
  @ApiUnauthorizedResponse({ description: 'Invalide Cridentials' })
  @ApiBody({ type: UserLogin, required: true })
  login(@Body() body: UserLogin): Promise<object | Error> {
    return this.userRepo.login(body);
  }
}
