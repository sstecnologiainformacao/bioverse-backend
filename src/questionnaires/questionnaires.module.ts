import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionnairesService } from './questionnaires.service';
import { QuestionnairesController } from './questionnaires.controller';
import { Questionnaire } from './entities/questionnaire.entity';
import { QuestionnaireJunction } from './entities/questionnaire_junction.entity';
import { Question } from './entities/question.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Questionnaire, QuestionnaireJunction, Question]),
  ],
  controllers: [QuestionnairesController],
  providers: [QuestionnairesService],
  exports: [TypeOrmModule],
})
export class QuestionnairesModule {}
