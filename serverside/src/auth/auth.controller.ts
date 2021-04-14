import { AuthService, VerifiedUser } from './auth.service';
import { Res, UseGuards, Headers } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiHeader,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
class UserVerify {
  username: string;
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  response: any;
  constructor(private readonly authService: AuthService) {}

  @ApiTags('auth')
  @Get('verify')
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token',
  })
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'User information from the data bases.',
    type: UserVerify,
  })
  @ApiUnauthorizedResponse({ description: 'Invalide Cridentials' })
  verifyUser(@Headers() header): Promise<Error | object | VerifiedUser> {
    return this.authService.verifyUser(header);
  }
}
