import { Controller, Get, Param } from '@nestjs/common';
import { QuestionnairesService } from './questionnaires.service';

@Controller('questionnaires')
export class QuestionnairesController {
  constructor(private readonly questionnairesService: QuestionnairesService) {}

  @Get()
  async getAll() {
    return this.questionnairesService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.questionnairesService.findOne(Number(id));
  }
}
