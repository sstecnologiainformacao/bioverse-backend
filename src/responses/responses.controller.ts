import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ResponsesService } from './responses.service';

@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Post()
  async submitResponses(
    @Body()
    body: {
      username: string;
      questionnaireId: number;
      responses: { questionId: number; answer: object }[];
    },
  ) {
    return this.responsesService.saveMultipleResponses(
      body.username,
      body.questionnaireId,
      body.responses,
    );
  }

  @Get(':username/:questionnaireId')
  async getUserResponses(
    @Param('username') username: string,
    @Param('questionnaireId') questionnaireId: number,
  ) {
    return this.responsesService.getResponses(
      username,
      Number(questionnaireId),
    );
  }
}
