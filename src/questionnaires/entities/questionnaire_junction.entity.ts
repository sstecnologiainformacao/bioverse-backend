import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';
import { Question } from './question.entity';

@Entity('questionnaire_junction')
export class QuestionnaireJunction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Question, (question) => question.questionnaires)
  question: Question;

  @ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.questions)
  questionnaire: Questionnaire;

  @Column()
  priority: number;
}
