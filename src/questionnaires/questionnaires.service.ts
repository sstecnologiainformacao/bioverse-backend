import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Questionnaire } from './entities/questionnaire.entity';

@Injectable()
export class QuestionnairesService {
  constructor(
    @InjectRepository(Questionnaire)
    private readonly questionnaireRepository: Repository<Questionnaire>,
  ) {}

  async findAll(): Promise<Questionnaire[]> {
    const result = await this.questionnaireRepository.find({
      relations: ['questions', 'questions.question'],
      order: {
        questions: {
          priority: 'ASC',
        },
      },
    });
    return result;
  }

  async findOne(id: number): Promise<Questionnaire> {
    return this.questionnaireRepository.findOne({
      where: { id },
      relations: ['questions', 'questions.question'],
    });
  }
}
