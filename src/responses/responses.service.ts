import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from './entities/response.entity';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectRepository(Response)
    private readonly responseRepository: Repository<Response>,
  ) {}

  async saveMultipleResponses(
    username: string,
    questionnaireId: number,
    responses: { questionId: number; answer: object }[],
  ): Promise<Response[]> {
    const responseEntities = responses.map((resp) => ({
      username,
      questionnaire: { id: questionnaireId },
      question: { id: resp.questionId },
      answer: resp.answer,
    }));

    return this.responseRepository.save(responseEntities);
  }

  async getResponses(username: string, questionnaireId: number) {
    return this.responseRepository.find({
      where: { username, questionnaire: { id: questionnaireId } },
      relations: ['question'],
    });
  }

  async getUsersWithCompletedQuestionnaires() {
    return this.responseRepository
      .createQueryBuilder('response')
      .select('response.username', 'username')
      .addSelect(
        'COUNT(DISTINCT response.questionnaireId)',
        'completedQuestionnaires',
      )
      .groupBy('response.username')
      .getRawMany();
  }

  async getUserResponses(username: string) {
    return this.responseRepository.find({
      where: { username },
      relations: ['questionnaire', 'question'],
      order: { questionnaire: { id: 'ASC' }, question: { id: 'ASC' } },
    });
  }
}
