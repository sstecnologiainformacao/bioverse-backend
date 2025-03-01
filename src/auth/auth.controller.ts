import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: { username: string; password: string }) {
    return this.authService.validateUser(loginDto.username, loginDto.password);
  }
}
