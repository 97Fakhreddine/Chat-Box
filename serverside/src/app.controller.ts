import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  response: any;
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}
  @ApiTags()
  @ApiCreatedResponse({
    status: 200,
    description: 'Google OAuth Success',
    type: String,
  })
  @ApiUnauthorizedResponse({ description: 'USER DOES NOT EXIST IN GOOGLE' })
  @Get()
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
}
