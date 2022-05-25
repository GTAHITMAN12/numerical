/* eslint-disable prettier/prettier */
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport'; change to below
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
@Controller()
export class AppController {
  constructor(private authSerice :AuthService){}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authSerice.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}