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
  @ApiTags('register/google')
  @ApiCreatedResponse({
    status: 200,
    description: 'Google OAuth Success',
    type: String,
  })
  @ApiUnauthorizedResponse({ description: 'USER DOES NOT EXIST IN GOOGLE' })
  @Get('register/google')
  @UseGuards(AuthGuard('google'))
  googleAuth(@Req() req, @Res() res) {
    this.response = res;
  }
  @ApiTags('auth/google/callback')
  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const { token } = await this.authService.googleLogin(req, res);
    res.redirect('http://localhost:3000/' + token);
  }

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
  verifyUser(@Headers() header): Promise<Error | object| VerifiedUser> {
    return this.authService.verifyUser(header);
  }
}
