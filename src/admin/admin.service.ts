import { Injectable } from '@nestjs/common';
import { ResponsesService } from 'src/responses/responses.service';

@Injectable()
export class AdminService {
  constructor(private readonly responseService: ResponsesService) {}

  async getUsersWithCompletedQuestionnaires() {
    return this.responseService.getUsersWithCompletedQuestionnaires();
  }

  async getUserResponses(username: string) {
    return this.responseService.getUserResponses(username);
  }
}
