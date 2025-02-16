import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionnaireJunction } from './questionnaire_junction.entity';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  question: object;

  @OneToMany(() => QuestionnaireJunction, (junction) => junction.question)
  questionnaires: QuestionnaireJunction[];
}
