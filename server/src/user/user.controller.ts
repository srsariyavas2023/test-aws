import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async register(@Body() body: { username: string; password: string }) {
    try {
      const result = await this.userService.register(
        body.username,
        body.password,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  @Post('/login')
  async login(@Body() body: { username: string; password: string }) {
    try {
        const result = await this.userService.login(
            body.username,
            body.password,
          );
          return result;
    } catch (error) {
        throw error;
    }
  }
}
