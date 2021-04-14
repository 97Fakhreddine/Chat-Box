import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallBack } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.CLIEND_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallBack,
  ): Promise<any> {
    const { name, photos, emails } = profile;

    const user = await {
      email: emails[0].value,
      verifying: emails[0].verified,
      firstname: name.givenName,
      lastname: name.familyName,
      userimg: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
