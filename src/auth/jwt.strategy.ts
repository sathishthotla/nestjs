import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //ignoreExpiration: { expiresIn: '5s' },
      signOptions: { expiresIn: '5s' },
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.userId, name: payload.name };
  }
}