import { Controller, Get, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  async getUsers() {
    return this.adminService.getUsersWithCompletedQuestionnaires();
  }

  @Get('users/:username')
  async getUserResponses(@Param('username') username: string) {
    return this.adminService.getUserResponses(username);
  }
}
