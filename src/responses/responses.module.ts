import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { Response } from './entities/response.entity';
import { Question } from '../questionnaires/entities/question.entity';
import { Questionnaire } from '../questionnaires/entities/questionnaire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Response, Question, Questionnaire])],
  controllers: [ResponsesController],
  providers: [ResponsesService],
  exports: [TypeOrmModule, ResponsesService],
})
export class ResponsesModule {}
